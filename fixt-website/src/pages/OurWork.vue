<script setup>
const projects = [
  { id: "p1", title: "Project 1", desc: "Placeholder description." },
  { id: "p2", title: "Project 2", desc: "Placeholder description." },
  { id: "p3", title: "Project 3", desc: "Placeholder description." },
  { id: "p4", title: "Project 4", desc: "Placeholder description." },
  { id: "p5", title: "Project 5", desc: "Placeholder description." },
];
</script>

<template>
  <section>
    <h1>Our Work</h1>
    <p>Placeholder intro.</p>

    <section class="grid">
      <article v-for="p in projects" :key="p.id" class="card">
        <div class="workimg">Image placeholder</div>
        <h2 style="margin: 10px 0 6px;">{{ p.title }}</h2>
        <p style="margin: 0;">{{ p.desc }}</p>
      </article>
    </section>
  </section>
</template>

<style scoped>
.workimg {
  border: 1px solid #ddd;
  border-radius: 12px;
  height: 140px;
  display: grid;
  place-items: center;
}
</style>
