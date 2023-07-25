<script setup lang="ts">
import { useDark } from '@vueuse/core';
import ThemeSwitch from './components/Theme/ThemeSwitch.vue';
import HomeView from './views/HomeView.vue';

const isDark = useDark();
</script>

<template>
  <div class="body-wrapper">
    <HomeView />
  </div>
</template>

<style></style>
