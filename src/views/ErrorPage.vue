<template>
    <section
        class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
        <div class="text-center max-w-xl">
            <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-6 mx-auto">
                <svg class="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" />
                </svg>
            </div>
            <h1 class="text-5xl font-extrabold text-gray-900 mb-4">404</h1>
            <p class="text-lg sm:text-xl text-gray-600 mb-6">Solicitud incorrecta. Por favor revisa la URL o los datos
                enviados.</p>
            <a href="/"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2662EB] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#1d4ed8] hover:text-gray-200 hover:shadow-xl">
                Volver al inicio
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{ code: number; message: string }>()
</script>