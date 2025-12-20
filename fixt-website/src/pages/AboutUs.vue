<script setup>
import AccordianFile from '@/pages/AccordianFile.vue'
</script>

<template>
  <section>
    <h1>About Us</h1>
    <p>Placeholder intro.</p>
    <div class="organizer">
      <div class="grid" style="margin-top: 12px;">
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
      <div class="about-us-image">
        <img src="/src/assets/megalopolis.JPEG">
      </div>
    </div>
  </section>

</template>
