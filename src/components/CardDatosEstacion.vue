<template>
  <div class="bg-white shadow rounded-lg p-4 space-y-4 max-w-md mx-auto">

    <!-- Título y estado -->
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold text-gray-800">{{ estacion.nombre }}</h3>
      <div :style="{ backgroundColor: getMarkerColor(estacion) }"
        class="text-white px-3 py-1 rounded-full text-sm font-medium">
        {{ getEstadoTexto(estacion) }}
      </div>
    </div>

    <!-- Comuna y Región -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
      <p><strong>Comuna:</strong> {{ estacion.comuna }}</p>
      <p><strong>Región:</strong> {{ estacion.region }}</p>
    </div>

    <!-- Datos en tiempo real -->
    <div v-if="estacion.realtime && estacion.realtime[0]" class="bg-gray-50 p-3 rounded-md shadow-inner space-y-2">
      <h4 class="font-medium text-gray-700">{{ estacion.realtime[0].name }} - Estado Actual</h4>

      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold text-gray-800">
          {{ getCurrentValue(estacion) }}
          <span class="text-sm font-normal">µg/m³</span>
        </div>
        <div class="text-right">
          <div class="text-sm text-gray-500">ICAP</div>
          <div class="font-medium text-gray-800">{{ getCurrentICAP(estacion) }}</div>
        </div>
      </div>

      <div class="text-xs text-gray-400">
        Última actualización: {{ estacion.realtime[0].datetime }}
      </div>
    </div>

    <!-- Red y Empresa -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
      <p><strong>Red:</strong> {{ estacion.red }}</p>
      <p><strong>Empresa:</strong> {{ estacion.empresa }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  estacion: {
    nombre: string
    key: string
    latitud: number
    longitud: number
    comuna: string
    red: string
    region: string
    regionindex: number
    calificacion: string
    empresa: string
    realtime: Array<{
      code: string
      name: string
      datetime: string
      tableRow: {
        color: string
        status: string
        statuscode: number
        datetime: string
        parameter: string
        movil: string
        value: number
        unit: string
        icap: number
        icapText: string
      }
      info?: {
        rows: Array<{
          c: Array<{ v: any }>
        }>
      }
    }>
  }
}>()

const getMarkerColor = (estacion: any) => {
  if (!estacion.realtime || !estacion.realtime[0] || !estacion.realtime[0].tableRow) {
    return '#9CA3AF'
  }
  return estacion.realtime[0].tableRow.color || '#9CA3AF'
}

const getEstadoTexto = (estacion: any) => {
  if (!estacion.realtime || !estacion.realtime[0]) return 'Sin datos'
  return estacion.realtime[0].tableRow?.status || 'Sin datos'
}

const getCurrentValue = (estacion: any) => {
  if (!estacion.realtime || !estacion.realtime[0]) return 'N/A'
  return estacion.realtime[0].tableRow?.value ?? 'N/A'
}

const getCurrentICAP = (estacion: any) => {
  if (!estacion.realtime || !estacion.realtime[0]) return 'N/A'
  return estacion.realtime[0].tableRow?.icap ?? 'N/A'
}
</script>
