<script setup>
import { ref } from "vue";

defineProps({
  title: { type: String, required: true },
});
const open = ref(false);
</script>

<template>
  <div class="card">
    <button type="button" class="head" @click="open = !open" :aria-expanded="open">
      <strong class="label">{{ title }}</strong>
      <span class="icon" aria-hidden="true">{{ open ? "−" : "+" }}</span>
    </button>

    <div v-if="open" class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  padding: 14px;
  background: #fff;
}

.head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 14px;
  background: transparent;
  border: 0;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;
}

.label {
  letter-spacing: -0.02em;
}

.icon {
  color: var(--muted);
}

.body {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--rule);
}

.body :deep(p) {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}
</style>


