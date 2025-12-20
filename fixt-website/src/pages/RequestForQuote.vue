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
  <section>
    <h1>Request for Quote</h1>
    <p>Placeholder text.</p>

    <form class="card" @submit.prevent="submit" style="max-width: 700px;">
      <div style="display: grid; gap: 10px;grid-template-columns: repeat(2, 1fr);">
       <div class="left">
         <div class="inputTitle">
          <div><strong>Name</strong></div>
          <input class="inputField" v-model="form.name" type="text" required style="width: 100%; padding: 10px;" />
        </div>

        <div class="inputTitle">
          <div><strong>Project Name</strong></div>
          <input class="inputField" v-model="form.projectName" type="text" required style="width: 100%; padding: 10px;" />
        </div>

        <div class="inputTitle">
          <div><strong>Type of Project</strong></div>
          <select class="inputSelect" v-model="form.projectType" required style="width: 100%; padding: 10px;">
            <option value="" disabled>Select…</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Repair</option>
            <option>Other</option>
          </select>
        </div>
       </div>
        <div class="right">
        <div class="inputTitle">
          <div><strong>Tell us about your project</strong></div>
          <textarea v-model="form.details" required style="width: 100%; padding: 10px; min-height: 120px;"></textarea>
        </div>
        </div>
        <button type="submit" style="padding: 10px 14px;">Submit</button>

        <p v-if="submitted" style="margin: 0;">Submitted (placeholder) — check console.</p>
      </div>
    </form>
  </section>
</template>
