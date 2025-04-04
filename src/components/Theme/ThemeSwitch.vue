<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import SunButton from './SunButton.vue';
import DarkButton from './DarkButton.vue';
import { onMounted, watch } from 'vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const updateThemeColor = (isDarkMode: boolean) => {
  const color = isDarkMode ? '#16171d' : '#fff';
  const metaThemeColor = document.querySelector('meta[name=theme-color]');

  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', color);
  }
};

watch(isDark, (newVal) => {
  updateThemeColor(newVal);
});

onMounted(() => {
  updateThemeColor(isDark.value);
});
</script>

<template>
  <button class="theme-button" @click="toggleDark()">
    <SunButton v-if="isDark" />
    <DarkButton v-else />
  </button>

  <slot></slot>
</template>

<style lang="scss">
$primary: #fff;
$secondary: #16171d;

.dark {
  height: 100%;
  background: #16171d;
  color: $primary;

  ::selection {
    background: #fff25d71; /* your preferred color */
    color: $primary; /* text color */
  }
}

::selection {
  background: #fff25d71; /* your preferred color */
  color: $secondary; /* text color */
}

.theme-button {
  margin-left: auto;
  width: fit-content;
  background: none;
  border: none;
  background-color: $primary;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0.3rem;
  cursor: pointer;
  outline: inherit;
  display: flex;
}
</style>
