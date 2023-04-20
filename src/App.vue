<script setup>
  import Headerr from './components/Header.vue'
  import Services from './components/Services.vue'
  import CTA from './components/CTA.vue'
  import Bottom from './components/Foot.vue'
</script>

<template>
  
  <Services />
  <CTA />
  <Bottom />
</template>

<style>

#app {
  margin: 0 auto;
  position: relative;
}

.elipse {
  position: absolute;
  border-radius: 50%;
  transform: scale(3) translate(0px, -243px);
}





</style>
