<template>
    <div class="cursor-pointer rounded-xl bg-white/80 backdrop-blur-sm p-5 shadow-sm border border-gray-200">
        <!-- Header con icono -->
        <div class="flex items-start justify-between mb-3">
            <div class="flex-1">
                <h3 class="font-semibold text-gray-900 text-base line-clamp-2">
                    {{ station.nombre }}
                </h3>
            </div>
            <div class="ml-2 flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
        </div>

        <!-- Info básica -->
        <div class="space-y-1.5 mb-3">
            <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" :fill="station.color" />
                </svg>
                <span class="truncate">{{ station.status }}</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span class="truncate">{{ station.comuna }}</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span class="truncate">{{ station.region }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    station: Record<string, any>;
}>();
</script>
