<script setup>
import AccordianFile from "@/pages/AccordianFile.vue";
</script>

<template>
  <section class="about">
    <header class="head">
      <h1 class="title">About Us</h1>
      <p class="lede">Short editorial copy + expandable sections. Keep it clean.</p>
    </header>

    <div class="layout">
      <div class="accordionCol">
        <AccordianFile title="Section 1">
          <p>Placeholder content for your site info.</p>
        </AccordianFile>

        <AccordianFile title="Section 2">
          <p>More placeholder content.</p>
        </AccordianFile>

        <AccordianFile title="Section 3">
          <p>More placeholder content.</p>
        </AccordianFile>
      </div>

      <figure class="imageCol">
        <img class="img" src="/src/assets/megalopolis.JPEG" alt="" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  gap: 18px;
}

.head {

  padding-top: 18px;
}

.lede {
  margin: 0;
  color: var(--muted);
  max-width: 70ch;
}

.layout {
  display: grid;
  gap: 18px;
}

@media (min-width: 960px) {
  .layout {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: start;
  }
}

.accordionCol {
  display: grid;
  gap: 12px;
}

.imageCol {
  margin: 0;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  overflow: hidden;
}

.img {
  width: 100%;
  height: clamp(280px, 40vw, 520px);
  object-fit: cover;
  display: block;
}
</style>

