<script setup>
import { useDark } from '@vueuse/core';
import ThemeSwitch from './components/Theme/ThemeSwitch.vue';
import HomeView from './views/HomeView.vue';

import { useVantaRings } from '@/components/common/vanta.js';

const { vantaElement } = useVantaRings();
</script>

<template>
  <div ref="vantaElement" style="width: 100vw; height: 100vh">
    <div class="body-wrapper">
      <HomeView />
    </div>
  </div>
</template>

<style></style>
