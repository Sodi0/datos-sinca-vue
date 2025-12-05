<template>
    <section class="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div
            class="relative mx-auto max-w-screen-xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12 sm:pb-28 lg:px-8 lg:pt-16 lg:pb-36">

            <div class="mx-auto max-w-4xl text-center">
                <!-- Badge -->
                <div
                    class="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Monitoreo en tiempo real
                </div>

                <!-- Título principal -->
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    Monitorea la
                    <span class="relative inline-block">
                        <span
                            class="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            calidad del aire
                        </span>
                        <span class="absolute bottom-2 left-0 w-full h-3 bg-blue-200 -z-10 transform -rotate-1"></span>
                    </span>
                    <br class="hidden sm:inline" />
                    en Chile
                </h1>

                <!-- Descripción -->
                <p class="mt-6 text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto leading-relaxed">
                    Accede a información actualizada de estaciones de monitoreo en todo el país.
                    Consulta niveles de contaminación, alertas ambientales y cuida tu salud respiratoria.
                </p>

                <!-- Botones CTA -->
                <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a class="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#2662EB] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-[#1d4ed8] hover:text-gray-200 hover:shadow-xl"
                        href="#estaciones">
                        <span>Buscar Estaciones</span>
                        <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <RouterLink class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 shadow-sm transition-all hover:border-[#535bf2] hover:bg-gray-50 hover:text-[#535bf2]"
                        to="/mapa">
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <span>Ver Mapa</span>
                    </RouterLink>
                </div>

                <!-- Stats o indicadores -->
                <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div class="rounded-lg bg-white/60 backdrop-blur-sm px-6 py-4 shadow-sm border border-gray-200">
                        <div class="text-3xl font-bold text-indigo-600"> {{ totalEstaciones }}</div>
                        <div class="mt-1 text-sm text-gray-600">Estaciones</div>
                    </div>
                    <div class="rounded-lg bg-white/60 backdrop-blur-sm px-6 py-4 shadow-sm border border-gray-200">
                        <div class="text-3xl font-bold text-indigo-600">24/7</div>
                        <div class="mt-1 text-sm text-gray-600">Monitoreo</div>
                    </div>
                    <div class="rounded-lg bg-white/60 backdrop-blur-sm px-6 py-4 shadow-sm border border-gray-200">
                        <div class="text-3xl font-bold text-indigo-600">{{ totalRegiones }}</div>
                        <div class="mt-1 text-sm text-gray-600">Regiones</div>
                    </div>
                </div>
                <BadgeDatos />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useEstaciones } from '../../api/useEstaciones';
import BadgeDatos from '../BadgeDatos.vue';

const { filteredStations } = useEstaciones();

const totalEstaciones = computed(() => filteredStations.value.length);
const totalRegiones = computed(() => {
    const regionesSet = new Set<string>();
    filteredStations.value.forEach(station => {
        regionesSet.add(station.region);
    });
    return regionesSet.size;
});
</script>