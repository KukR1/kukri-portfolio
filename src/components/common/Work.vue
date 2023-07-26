<script setup lang="ts">
import Arrow from '../Arrow.vue';

const bio = [
  {
    year: 1996,
    description: 'Born in Dneproderzhinsk, Ukraine'
  },
  {
    year: 2019,
    description:
      "Completed the Bachelor's Program in London Metropolitan University as a Computer Scientist"
  },
  {
    year: 2020,
    description: 'Intern at "Trippers.app", Monaco - Remote',
    link: 'https://www.linkedin.com/company/trippers-app/'
  },
  {
    year: 2021,
    description: 'Worked at "Escape Game Over", Athens - Remote',
    link: 'https://escapegameover.com/'
  },
  {
    year: 2022,
    description: 'Worked at "Khyria", US - Remote',
    link: 'https://www.linkedin.com/company/khyria/'
  },
  {
    year: 2022,
    description: 'Worked at "Leaflets.io", Netherlands',
    link: 'http://www.leaflets.io'
  },
  {
    year: 2023,
    description: 'Worked at "TJIP", Netherlands',
    link: 'https://www.tjip.com/en/home'
  }
];
</script>

<template>
  <div class="wrapper" v-for="item in bio" :key="item.year">
    <div class="year">{{ item.year }}</div>
    <div class="desc">
      <span> {{ item.description }}</span>
      <a
        v-if="item.link"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
        ><Arrow
      /></a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  font-size: calc(1.2rem + 0.2vw);
  flex-direction: row;
  align-items: start;
  width: 60vw;

  .year {
    font-weight: 500;
  }

  .desc {
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
}

@media (max-width: 1366px) {
  .wrapper {
    width: 80vw;
  }
}
</style>
