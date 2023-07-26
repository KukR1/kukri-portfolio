<template>
  <div class="layout-wrapper">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.layout-wrapper {
  padding: 8vh 10vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
