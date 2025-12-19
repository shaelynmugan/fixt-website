<script setup>
import { ref } from "vue";

defineProps({
  title: { type: String, required: true },
});
const open = ref(false);
</script>

<template>
  <div class="card">
    <button type="button" class="head" @click="open = !open">
      <strong>{{ title }}</strong>
      <span>{{ open ? "−" : "+" }}</span>
    </button>

    <div v-if="open" class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background: transparent;
  border: 0;
  padding: 0;
  font: inherit;
  cursor: pointer;
}
.body { margin-top: 10px; }
</style>

