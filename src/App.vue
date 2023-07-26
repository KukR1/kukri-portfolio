<script setup>
import { useDark } from '@vueuse/core';
import ThemeSwitch from './components/Theme/ThemeSwitch.vue';
import HomeView from './views/HomeView.vue';
import { useVantaRings } from '@/components/common/vanta.js';

const { vantaElement } = useVantaRings();
</script>

<template>
  <div ref="vantaElement" class="fullscreen-vanta">
    <div class="body-wrapper">
      <HomeView />
    </div>
  </div>
</template>

<style scoped>
.fullscreen-vanta {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: -webkit-fill-available;
}
</style>
