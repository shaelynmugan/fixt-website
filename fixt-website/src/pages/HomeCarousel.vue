<script setup>
import { computed, ref } from "vue";

const slides = [
  { id: 1, label: "Photo 1 (placeholder)" },
  { id: 2, label: "Photo 2 (placeholder)" },
  { id: 3, label: "Photo 3 (placeholder)" },
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
  <section class="card">
    <div class="frame">
      <p style="margin: 0;">{{ current.label }}</p>
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
  height: 280px; /* big frame */
  display: grid;
  place-items: center;
}
.controls {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button { padding: 8px 12px; }
</style>


