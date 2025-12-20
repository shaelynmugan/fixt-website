<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  projectName: "",
  projectType: "",
  details: "",
});

const submitted = ref(false);

function submit() {
  submitted.value = true;
  console.log("FORM (placeholder):", form);
}
</script>

<template>
  <section class="rfq">
    <header class="head">
      <h1 class="title">Request for Quote</h1>
      <p class="lede">Tell us a bit about your project.</p>
    </header>

    <form class="card" @submit.prevent="submit">
      <div class="grid">
        <div class="col">
          <label class="field">
            <span class="label"><strong>Name</strong></span>
            <input v-model="form.name" class="input" type="text" required />
          </label>

          <label class="field">
            <span class="label"><strong>Project Name</strong></span>
            <input v-model="form.projectName" class="input" type="text" required />
          </label>

          <label class="field">
            <span class="label"><strong>Type of Project</strong></span>
            <select v-model="form.projectType" class="input" required>
              <option value="" disabled>Select…</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Repair</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <div class="col">
          <label class="field">
            <span class="label"><strong>Tell us about your project</strong></span>
            <textarea v-model="form.details" class="input textarea" required />
          </label>
        </div>
      </div>

      <div class="actions">
        <button class="btn" type="submit">Submit</button>
        <p v-if="submitted" class="submitted">Submitted (placeholder) — check console.</p>
      </div>
    </form>
  </section>
</template>

<style scoped>
.rfq {
  display: grid;
  gap: 18px;
}

.lede {
  margin: 0;
  color: var(--muted);
  max-width: 70ch;
}

.card {
  max-width: 100vw;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  padding: 16px;
  background: #fff;
}

.grid {
  display: grid;
  gap: 16px;
  width: 100%;
}

@media (min-width: 900px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.field {
  display: grid;
  gap: 8px;
  margin-bottom: 14px;
}

.label {
  color: var(--text);
}

.input {
  width: 100%;
  padding: 12px 12px;
  font: inherit;
  color: var(--text);
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 12px;
}

.input:focus {
  outline: none;
  border-color: var(--rule-strong);
  box-shadow: 0 0 0 3px rgba(212, 0, 0, 0.12);
}

.textarea {
  min-height: 170px;
  resize: vertical;
}

.actions {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 6px;
  border-top: 1px solid var(--rule);
  padding-top: 14px;
}

.btn {
  appearance: none;
  border: 1px solid var(--text);
  background: var(--text);
  color: #fff;
  padding: 12px 14px;
  border-radius: 999px;
  font: inherit;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.92;
}

.submitted {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}


</style>
