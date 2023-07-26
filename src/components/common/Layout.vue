<script setup>
import { useVantaRings } from '@/components/common/vanta.js';

const { vantaElement } = useVantaRings();
</script>
<template>
  <div class="layout-wrapper">
    <div ref="vantaElement" style="width: 100%; height: 400px"></div>
    <slot></slot>
  </div>
</template>
<style lang="scss">
.layout-wrapper {
  padding: 5vh 10vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
