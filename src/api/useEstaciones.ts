import { ref, onMounted } from "vue";
import { fetchSincaData } from "../api/sinca";

export function useEstaciones() {
  const searchQuery = ref("");
  const allStations = ref<any[]>([]);
  const filteredStations = ref<any[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const loadStations = async () => {
    loading.value = true;
    error.value = null;
    try {
      const data = await fetchSincaData();
      allStations.value = data.map((s: any) => ({
        ...s,
        status: s.realtime?.[0]?.tableRow?.status || "Sin datos",
        color: s.realtime?.[0]?.tableRow?.color || '#ccc',
      }));
      filteredStations.value = allStations.value;
    } catch (err) {
      error.value = "Error al cargar los datos. Por favor, intenta nuevamente.";
      console.error("Error loading SINCA data:", err);
    } finally {
      loading.value = false;
    }
  };

  const filterStations = () => {
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
  };

  onMounted(() => {
    loadStations();
  });

  return {
    searchQuery,
    filteredStations,
    loading,
    error,
    filterStations,
  };
}
