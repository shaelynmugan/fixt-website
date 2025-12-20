<script setup>
import { computed, ref } from "vue";

const slides = [
  { id: 1, image: "/src/assets/seven.jpg" },
  { id: 2, image: "/src/assets/strang.jpg" },
  { id: 3, image: "/src/assets/sunda.jpg" },
];

const index = ref(0);
const current = computed(() => slides[index.value]);

function prev() {
  index.value = (index.value - 1 + slides.length) % slides.length;
}
function next() {
  index.value = (index.value + 1) % slides.length;
}
</script>

<template>
  <section class="card2">
    <div class="frame">
      <img class="project-image" :src="current.image" alt="" />
    </div>

    <div class="controls">
      <button type="button" @click="prev">←</button>
      <span>{{ index + 1 }} / {{ slides.length }}</span>
      <button type="button" @click="next">→</button>
    </div>
  </section>
</template>

<style scoped>
.frame {
  border: 1px solid #ddd;
  border-radius: 14px;
  display: grid;
  place-items: center;
  overflow: hidden;
  max-height: 80%;
  aspect-ratio: auto;
}
.controls {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button { padding: 8px 12px; }
</style>



