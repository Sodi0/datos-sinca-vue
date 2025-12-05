<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-4">
          <RouterLink
            to="/"
            class="flex items-center gap-2"
            title="Ir al inicio"
          >
            <img
              src="../assets/logo.png"
              alt="Logo"
              class="h-12 w-auto md:h-14 lg:h-14 object-contain"
              loading="eager"
            />
          </RouterLink>
        </div>

        <!-- Menú desktop -->
        <nav class="hidden md:flex gap-8 text-sm font-medium">
          <RouterLink
            to="/"
            class="text-gray-700 hover:text-blue-600 transition"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/' }"
          >
            Inicio
          </RouterLink>

          <RouterLink
            to="/mapa"
            class="text-gray-700 hover:text-blue-600 transition"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/mapa' }"
          >
            Mapa
          </RouterLink>
        </nav>

        <!-- Menú móvil -->
        <div class="md:hidden">
          <input
            type="checkbox"
            id="mobile-menu-toggle"
            class="hidden peer"
            v-model="menuOpen"
          />

          <label
            for="mobile-menu-toggle"
            class="p-2 text-gray-700 hover:text-blue-600 cursor-pointer block"
            aria-label="Abrir menú de navegación"
            :aria-expanded="menuOpen"
          >
            <div class="relative w-6 h-6">
              <span
                class="absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300"
                :class="{ 'rotate-45 top-2.5': menuOpen }"
              ></span>
              <span
                class="absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300"
                :class="{ 'opacity-0': menuOpen }"
              ></span>
              <span
                class="absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300"
                :class="{ '-rotate-45 top-2.5': menuOpen }"
              ></span>
            </div>
          </label>

          <transition name="slide-down">
            <div
              v-if="menuOpen"
              class="absolute left-0 right-0 top-16 bg-white shadow-lg border-t"
            >
              <nav class="px-4 py-4 space-y-2">
                <RouterLink
                  to="/"
                  class="block py-3 px-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition"
                  :class="{
                    'text-blue-600 font-semibold': $route.path === '/',
                  }"
                  @click="menuOpen = false"
                >
                  Inicio
                </RouterLink>

                <RouterLink
                  to="/mapa"
                  class="block py-3 px-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition"
                  :class="{
                    'text-blue-600 font-semibold': $route.path === '/mapa',
                  }"
                  @click="menuOpen = false"
                >
                  Mapa
                </RouterLink>
              </nav>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);
</script>

<style scoped>
#mobile-menu-toggle:checked + label span:first-child {
  transform: rotate(45deg);
  top: 10px;
}

#mobile-menu-toggle:checked + label span:nth-child(2) {
  opacity: 0;
}

#mobile-menu-toggle:checked + label span:last-child {
  transform: rotate(-45deg);
  top: 10px;
}

#mobile-menu-toggle:checked ~ div {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
