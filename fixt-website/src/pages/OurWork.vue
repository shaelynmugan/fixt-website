<script setup>
const projects = [
  { id: "p1", title: "Project 1", desc: "Placeholder description.", image: "/src/assets/grandisland.jpg" },
  { id: "p2", title: "Project 2", desc: "Placeholder description.", image: "/src/assets/meet-minneapolis.jpeg" },
  { id: "p3", title: "Project 3", desc: "Placeholder description.", image: "/src/assets/seven.jpg" },
  { id: "p4", title: "Project 4", desc: "Placeholder description.", image: "/src/assets/strang.jpg" },
  { id: "p5", title: "Project 5", desc: "Placeholder description.", image: "/src/assets/sunda.jpg" },
];
</script>

<template>
  <section>
    <h1>Our Work</h1>
    <p>Placeholder intro.</p>

    <section class="projects">
      <article v-for="p in projects" :key="p.id" class="card">
        <div class="working">
          <img class="project-image" :src="p.image" alt="" />
        </div>
        <h2 style="margin: 10px 0 6px;">{{ p.title }}</h2>
        <p style="margin: 0;">{{ p.desc }}</p>
      </article>
    </section>
  </section>
</template>

<style scoped>
.working {
  border: 1px solid #ddd;
  border-radius: 12px;
  display: grid;
  place-items: center;
  aspect-ratio: 3/2;
  overflow: hidden;
}




</style>
