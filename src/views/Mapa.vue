<template>
    <section id="estaciones" class="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div class="text-center mb-12">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900">
                    Calidad del aire en
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Chile
                    </span>
                </h2>
                <p class="mt-4 text-gray-600 sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Accede a información actualizada de estaciones de monitoreo en todo el país.
                    Consulta niveles de contaminación, alertas ambientales y cuida tu salud respiratoria.
                </p>
            </div>

            <!-- Búsqueda -->
            <div class="max-w-md mx-auto mb-8">
                <input type="text" v-model="searchQuery" @input="filterStations"
                    placeholder="Buscar por estación, comuna o región..."
                    class="bg-gray-50 w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <main class="flex flex-col items-center gap-8">

                <!-- Mapa de estaciones -->
                <div v-if="filteredStations.length > 0"
                    class="rounded-2xl bg-white/70 backdrop-blur-md shadow-lg overflow-hidden p-4 w-full">
                    <MapaEstaciones :estaciones="filteredStations" class="w-full h-[500px] sm:h-[600px]" />
                </div>

                <!-- Loading -->
                <div v-else-if="loading" class="flex items-center justify-center h-64 w-full">
                    <div
                        class="animate-pulse bg-white/70 backdrop-blur-md px-6 py-4 rounded-xl shadow text-gray-700 font-medium text-center">
                        Cargando datos...
                    </div>
                </div>

                <!-- Error -->
                <div v-else-if="error"
                    class="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow font-medium w-full text-center">
                    {{ error }}
                </div>

                <!-- Stats -->
                <div v-if="filteredStations.length > 0" class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                    <div
                        class="rounded-lg bg-white/60 backdrop-blur-sm px-6 py-4 shadow-sm border border-gray-200 text-center">
                        <div class="text-3xl font-bold text-indigo-600">{{ filteredStations.length }}</div>
                        <div class="mt-1 text-sm text-gray-600">Estaciones</div>
                    </div>
                    <div
                        class="rounded-lg bg-white/60 backdrop-blur-sm px-6 py-4 shadow-sm border border-gray-200 text-center">
                        <div class="text-3xl font-bold text-indigo-600">24/7</div>
                        <div class="mt-1 text-sm text-gray-600">Monitoreo</div>
                    </div>
                    <div
                        class="rounded-lg bg-white/60 backdrop-blur-sm px-6 py-4 shadow-sm border border-gray-200 text-center">
                        <div class="text-3xl font-bold text-indigo-600">{{ totalRegiones }}</div>
                        <div class="mt-1 text-sm text-gray-600">Regiones</div>
                    </div>
                </div>

            </main>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import MapaEstaciones from '../components/MapaEstaciones.vue'
import { useEstaciones } from '../api/useEstaciones'

const { searchQuery, filteredStations, loading, error, filterStations } = useEstaciones()

const totalRegiones = computed(() => {
    const regionesSet = new Set<string>()
    filteredStations.value.forEach(station => {
        regionesSet.add(station.region)
    })
    return regionesSet.size
})
</script>
