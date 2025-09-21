<script setup lang="ts">
import VueWriter from 'vue-writer';
</script>

<template>
   <div
      class="wrapper"
      v-motion
      :initial="{ opacity: 0, x: -200 }"
      :enter="{ opacity: 1, x: 0, scale: 1 }"
   >
      <VueWriter
         :typeSpeed="200"
         :iterations="1"
         class="greeting"
         :array="['hey,']"
      />
      <VueWriter
         :typeSpeed="150"
         :start="1000"
         :iterations="1"
         class="title"
         :array="['i\'m nikita danilov.']"
      />
   </div>
</template>

<style lang="scss">
$cursor: rgba(157, 157, 157, 0.654);

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
.is-typed.greeting {
   font-weight: 600;
   font-size: calc(5rem + 0.2vw);
}
.is-typed.title {
   font-size: calc(2.2rem + 0.2vw);
}
.is-typed.greeting span.cursor {
   display: inline-block;
   width: 3px;
   background-color: $cursor;
   animation: blink 1s infinite, hide 0.5s 300ms forwards step-end;
}

.is-typed.title span.cursor {
   display: inline-block;
   width: 3px;
   background-color: $cursor;
   animation: hide-initially 1s forwards, blink 1s 1s infinite,
      hide 4.5s 300ms forwards step-end;
}
@keyframes hide-initially {
   0% {
      opacity: 0;
   }
   99% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
}
@keyframes blink {
   49% {
      background-color: $cursor;
   }
   50% {
      background-color: transparent;
   }
   99% {
      background-color: transparent;
   }
}

@keyframes hide {
   to {
      opacity: 0;
   }
}
</style>
