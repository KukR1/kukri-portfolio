<script setup lang="ts">
import { useDark } from '@vueuse/core';
import Layout from './components/common/Layout.vue';

const isDark = useDark();
</script>

<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<style></style>
