import { ref, computed, onMounted } from "vue";
import { fetchSincaData } from "../api/sinca";
import type { SincaStation } from "../types/sinca";

const POLL_INTERVAL = 2 * 60 * 1000; // 2 minutos
const STALE_AFTER = 5 * 60 * 1000; // 5 minutos

const searchQuery = ref("");
const allStations = ref<any[]>([]);
const filteredStations = ref<any[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

const lastUpdated = ref<number | null>(null);
const isStale = computed(() => {
  if (!lastUpdated.value) return true;
  return Date.now() - lastUpdated.value > STALE_AFTER;
});

let _pollingStarted = false;
let _intervalId: number | null = null;

async function loadStations() {
  loading.value = true;
  error.value = null;
  try {
    const data = await fetchSincaData();
    allStations.value = (data as SincaStation[]).map((s) => ({
      ...s,
      nombre: s.nombre ?? "Sin nombre",
      comuna: s.comuna ?? "",
      region: s.region ?? "",
      status: s.realtime?.[0]?.tableRow?.status ?? "Sin datos",
      color: s.realtime?.[0]?.tableRow?.color ?? "#ccc",
    }));
    filteredStations.value = allStations.value;
    lastUpdated.value = Date.now();
  } catch (err) {
    error.value = "Error al cargar los datos. Por favor, intenta nuevamente.";
    console.error("Error loading SINCA data:", err);
  } finally {
    loading.value = false;
  }
}

function filterStations() {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) {
    filteredStations.value = allStations.value;
    return;
  }

  filteredStations.value = allStations.value.filter((station) => {
    return (
      station.nombre?.toLowerCase().includes(query) ||
      station.comuna?.toLowerCase().includes(query) ||
      station.region?.toLowerCase().includes(query) ||
      station.realtime?.some((m: any) =>
        m.tableRow?.status?.toLowerCase().includes(query)
      )
    );
  });
}

function startPollingOnce() {
  if (_pollingStarted) return;
  _pollingStarted = true;
  // carga inicial
  loadStations();
  // iniciar intervalo
  _intervalId = window.setInterval(() => {
    loadStations();
  }, POLL_INTERVAL) as unknown as number;
}

export function useEstaciones() {
  onMounted(() => {
    startPollingOnce();
  });

  return {
    searchQuery,
    filteredStations,
    loading,
    error,
    filterStations,
    lastUpdated,
    isStale,
  };
}
