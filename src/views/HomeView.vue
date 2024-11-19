<script setup lang="ts">
import MainContent from '@/components/common/MainContent.vue';
import MainHeader from '@/components/common/MainHeader.vue';
import { useTitle } from '@vueuse/core';

useTitle('Home | Nik Danilov');
</script>

<template>
  <MainHeader />
  <MainContent />
</template>
