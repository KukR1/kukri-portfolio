<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import Main from '@/components/common/Main.vue';
import { useTitle } from '@vueuse/core';

useTitle('Home | Nik Danilov');
</script>

<template>
  <Header />
  <Main />
</template>
