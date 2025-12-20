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
  <section class="carousel" aria-label="Featured images">
    <div class="frame">
      <img class="image" :src="current.image" alt="" />
    </div>

    <div class="controls">
      <button class="btn" type="button" @click="prev" aria-label="Previous slide">←</button>
      <span class="count">{{ index + 1 }} / {{ slides.length }}</span>
      <button class="btn" type="button" @click="next" aria-label="Next slide">→</button>
    </div>
  </section>
</template>

<style scoped>
.carousel {
  display: grid;
  gap: 12px;
}

.frame {
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  overflow: hidden;
  background: #fff;
}

.image {
  width: 100%;
  height: clamp(260px, 42vw, 520px);
  object-fit: cover;
  display: block;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--rule);
  padding-top: 12px;
}

.count {
  font-size: 13px;
  color: var(--muted);
}

.btn {
  appearance: none;
  border: 1px solid var(--rule-strong);
  background: transparent;
  color: var(--text);
  border-radius: 999px;
  padding: 8px 12px;
  cursor: pointer;
}

.btn:hover {
  border-color: var(--text);
}
</style>
