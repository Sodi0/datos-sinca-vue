<template>
  <div
    role="status"
    :class="[
      'mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6',
      isStale ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700',
    ]"
  >
    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    {{ freshnessLabel }}
  </div>
</template>
<script setup>
import { useEstaciones } from "../api/useEstaciones";
import { computed } from "vue";
const { lastUpdated, isStale } = useEstaciones();

const freshnessLabel = computed(() => {
  if (!lastUpdated.value) return "Sin datos";
  if (isStale.value) return "Datos desactualizados";
  const mins = Math.floor((Date.now() - lastUpdated.value) / 60000);
  return mins <= 0 ? "Actualizado hace <1 min" : `Actualizado hace ${mins} min`;
});
</script>
