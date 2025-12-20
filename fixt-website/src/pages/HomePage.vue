<script setup>
import HomeCarousel from '@/pages/HomeCarousel.vue'
</script>

<template>
  <section class="home">
    <header class="hero">
      <h1 class="title">Fixt Custom Lighting</h1>
      <p class="lede">We specialize in custom lighting solutions.</p>
    </header>

    <section class="panel">
      <HomeCarousel />
    </section>
  </section>
</template>

<style scoped>
.home {
  display: grid;
  gap: 22px;
}

.hero {
  padding-top: 18px;
}

.title {
  margin: 0 0 10px;
  letter-spacing: -0.03em;
  line-height: 1.05;
  font-size: clamp(32px, 4vw, 56px);
}

.lede {
  margin: 0;
  color: var(--muted);
  max-width: 70ch;
  font-size: 16px;
}

.panel {
  padding-top: 6px;
}
</style>
