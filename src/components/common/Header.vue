<script setup lang="ts"></script>

<template>
  <div
    class="wrapper"
    v-motion
    :initial="{ opacity: 0, x: -200 }"
    :enter="{ opacity: 1, x: 0, scale: 1 }"
  >
    <div class="greeting">hey,</div>
    <div class="title">I'm nik danilov 👋</div>
  </div>
</template>

<style scoped lang="scss">
.greeting {
  font-size: calc(4rem + 0.2vw);
}
.title {
  font-size: calc(2rem + 0.2vw);
}
.title .greeting {
  cursor: pointer;
  font-weight: 600;
  width: fit-content;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
