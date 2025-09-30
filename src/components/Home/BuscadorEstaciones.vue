<template>
    <div class="bg-gradient-to-br from-blue-50 via-white to-indigo-50" id="estaciones">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-prose text-center">
                <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Buscador de Estaciones de Monitoreo
                </h2>
                <p class="mt-4 text-gray-600">
                    Busca estaciones de monitoreo de calidad del aire por zona, comuna o región.
                </p>
            </div>

            <div class="mx-auto mt-8 max-w-4xl">
                <label for="search" class="flex-1">
                    <span class="sr-only">Buscar zona</span>
                    <input type="text" id="search" v-model="searchQuery"
                        placeholder="Buscar por zona, comuna o región..."
                        class="h-12 w-full rounded-lg border-2 pl-2 border-gray-200 shadow-sm bg-gray-50 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        @input="filterStations" />
                </label>

                <div v-if="loading" class="mt-4 text-center text-gray-600">
                    <div class="inline-block rounded-full h-8 w-8 border-4 border-gray-300 border-t-indigo-600"></div>
                    <p class="mt-2">Cargando datos...</p>
                </div>

                <div v-if="error" class="mt-4 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
                    {{ error }}
                </div>

                <!-- Resultados -->
                <div v-if="!loading && filteredStations.length > 0" class="mt-6">
                    <p class="mb-4 text-sm font-medium text-gray-600">
                        {{ filteredStations.length }} resultado(s) encontrado(s)
                    </p>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[32rem] overflow-y-auto pr-2">
                        <CardBuscador v-for="station in filteredStations" :key="station.key" :station="station" />
                    </div>
                </div>

                <!-- Sin resultados -->
                <div v-if="!loading && searchQuery && filteredStations.length === 0" class="mt-6 text-center">
                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                        <svg class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <p class="text-gray-600 font-medium">No se encontraron estaciones</p>
                    <p class="text-sm text-gray-500 mt-1">
                        Intenta con otro criterio de búsqueda
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useEstaciones } from '../../api/useEstaciones';
import CardBuscador from './CardBuscador.vue';

const { searchQuery, filteredStations, loading, error, filterStations } = useEstaciones();
</script>
