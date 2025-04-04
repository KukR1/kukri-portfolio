<template>
   <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :delay="200"
      class="content"
   >
      <div>
         I'm a software engineer, mostly focused on the front-end, but sometimes
         I try some stuff on the back-end too. I mostly program in Typescript
         using React, Next and Vue. Based in the Netherlands at the moment and
         working at
         <a href="https://www.tjip.com/" target="_blank"> TJIP</a>
         as a front-end developer
      </div>
      <div>
         You can check my work on
         <a href="https://github.com/KukR1" target="_blank">GitHub</a> 🥱, or
         let's connect through
         <a href="https://www.linkedin.com/in/mdanilov96/" target="_blank"
            >LinkedIn</a
         >
         for possible collaborations 🤗
      </div>
      <div>
         In my free time and outside of programming, I love to play football,
         video games and walks ☕️
      </div>
   </div>
</template>

<style scoped>
a {
   color: inherit;
   text-decoration: none;
   text-decoration: none;
   position: relative;
   cursor: pointer;
}

a::before {
   content: '';
   background-color: #4a85ebae;
   position: absolute;
   left: 0;
   bottom: 1px;
   width: 100%;
   height: 10px;
   z-index: -1;
   transition: all 0.3s ease-in-out;
}

a:hover::before {
   bottom: 0;
   height: 90%;
}

.content {
   line-height: 2.2rem;
   display: flex;
   flex-direction: column;
   font-weight: 300;
   gap: 2rem;
   width: 50vw;
   font-size: calc(1.2rem + 0.4vw);
}

@media (max-width: 1366px) {
   .content {
      width: 80vw;
   }
}
</style>
