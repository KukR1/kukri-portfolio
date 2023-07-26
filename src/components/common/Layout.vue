<script setup lang="ts">
import ThemeSwitch from '@/components/Theme/ThemeSwitch.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="layout-wrapper">
    <div class="nav-wrapper">
      <nav>
        <router-link v-if="route.path !== '/'" to="/">Home</router-link>
        <router-link v-else to="/work-bio">Work & Bio</router-link>
      </nav>
      <ThemeSwitch />
    </div>
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

.nav-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

nav {
  a {
    color: inherit;
    font-size: calc(1.5rem + 0.2vw);
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
    position: relative;
    text-decoration: none;
  }

  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: rgb(131, 172, 241);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
}
</style>
