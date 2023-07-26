<script setup lang="ts">
import ThemeSwitch from '@/components/Theme/ThemeSwitch.vue';
import Header from '@/components/common/Header.vue';
import Layout from '@/components/common/Layout.vue';
import Main from '@/components/common/Main.vue';
import { ref } from 'vue';
</script>

<template>
  <Layout>
    <Header />
    <Main />
  </Layout>
</template>
<style scoped lang="scss">
$primary: rgb(4, 69, 91);

.title {
  font-size: 3rem;
  width: fit-content;
}
</style>
