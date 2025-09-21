<script setup lang="ts">
import ReactIcon from '@/assets/icons/ReactIcon.vue';
import TSIcon from '@/assets/icons/TSIcon.vue';
import JSIcon from '@/assets/icons/JSIcon.vue';
import VueIcon from '@/assets/icons/VueIcon.vue';
import TailwindIcon from '@/assets/icons/TailwindIcon.vue';
import ReduxIcon from '@/assets/icons/ReduxIcon.vue';
import MuiIcon from '@/assets/icons/MuiIcon.vue';
import BootstrapIcon from '@/assets/icons/BootstrapIcon.vue';
import LaravelIcon from '@/assets/icons/LaravelIcon.vue';
import { useTitle } from '@vueuse/core';
import ArrowIcon from '@/components/ArrowIcon.vue';
import DotNet from '@/assets/icons/DotNet.vue';

useTitle('Work & Bio | Nik Danilov');

const bio = [
   {
      year: 1996,
      description: 'Born in Kamianske, Ukraine'
   },
   {
      year: 2020,
      description:
         "Completed my Bachelor's degree in Computer Science at London Metropolitan University, UK"
   },
   {
      year: 2020,
      description: 'Intern at "Trippers.app", Monaco - Remote',
      link: 'https://www.linkedin.com/company/trippers-app/',
      tech: [ReactIcon, JSIcon]
   },
   {
      year: 2021,
      description: 'Worked at "Escape Game Over", Athens - Remote',
      link: 'https://escapegameover.com/',
      tech: [LaravelIcon, JSIcon, BootstrapIcon]
   },
   {
      year: 2022,
      description: 'Worked at "Khyria", US - Remote',
      link: 'https://www.khyria.com/',
      tech: [ReactIcon, TSIcon, MuiIcon]
   },
   {
      year: 2022,
      description: 'Worked at "Anlytic", Netherlands',
      link: 'https://www.anlytic.com/',
      tech: [ReactIcon, TSIcon, TailwindIcon, ReduxIcon]
   },
   {
      year: 2023,
      description: 'Working at "TJIP", Netherlands',
      link: 'https://www.tjip.com/',
      tech: [VueIcon, TSIcon, TailwindIcon, DotNet]
   }
];
</script>

<template>
   <div
      v-motion
      :initial="{ opacity: 0, x: 100 }"
      :enter="{ opacity: 1, x: 0 }"
      :delay="100"
      class="work-wrapper"
   >
      <div v-for="item in bio" :key="item.year" class="item-wrapper">
         <div class="year">{{ item.year }}</div>
         <span class="seperator">|</span>
         <div class="desc">
            <div class="desc-wrapper">
               <span> {{ item.description }}</span>
               <a
                  v-if="item.link"
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <ArrowIcon />
               </a>
            </div>
            <div class="tech-stack">
               <component
                  v-for="(tech, index) in item.tech"
                  :key="index"
                  :is="tech"
                  class="tech-icon"
               />
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.work-wrapper {
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
}

.item-wrapper {
   display: flex;
   font-size: calc(1.2rem + 0.2vw);
   flex-direction: row;
   align-items: start;
   width: 60vw;
   gap: 2rem;

   .year {
      font-weight: 600;
   }

   .desc {
      a:visited {
         color: rgb(61, 159, 220);
      }

      span {
         font-weight: 400;
      }

      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
   }

   .desc-wrapper {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      align-items: center;
   }

   .tech-stack {
      display: flex;
      flex-direction: row;
      gap: 0.3rem;
      align-items: center;
   }

   .tech-icon {
      background-color: inherit;
      padding: 0.2rem;
      border-radius: 5px;
   }
}

@media (max-width: 1366px) {
   .item-wrapper {
      width: 80vw;
      gap: 1rem;
   }
}

@media (max-width: 768px) {
   .item-wrapper {
      width: 70vw;
      flex-direction: column;
      gap: 0.5rem;

      .year {
         text-decoration: underline;
      }

      .seperator {
         display: none;
      }
   }
}
</style>
