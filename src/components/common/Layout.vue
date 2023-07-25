<template>
  <div class="layout-wrapper">
    <slot></slot>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.layout-wrapper {
  padding: 5vh 10vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
