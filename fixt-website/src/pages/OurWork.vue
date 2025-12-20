<script setup>

const projects = [
  {
    id: 'p1',
    title: 'Grand Island Casino',
    desc: 'Custom fixtures designed and manufactured for a casino renovation project.',
    image: '/src/assets/grandisland.jpg',
    location: 'Grand Island, NE',
    projectType: 'Casino',
    projectYear:'2025',
    fixtureType: 'chandelier,pendant,installation'
  },
  {
    id: 'p2',
    title: 'Meet Minneapolis',
    desc: 'Custom fixtures designed and fabricated for office space.',
    image: '/src/assets/meet-minneapolis.jpeg',
    location: 'Minneapolis, MN',
    projectType: 'Office',
    projectYear:'2022',
    fixtureType: 'pendant'

  },
  {
    id: 'p3',
    title: 'Point Seven',
    desc: 'Collaboration with Cym Warkov - wiring custom made table lamps for fine dining.',
    image: '/src/assets/seven.jpg',
    location: 'New York City, NY',
    projectType: 'Restaurant',
    projectYear:'2020',
    fixtureType: 'ceramic, wiring, table lamp'
  },
  {
    id: 'p4',
    title: 'Strang Reserve',
    desc: 'Light installation designed and installed.',
    image: '/src/assets/strang.jpg',
    location: 'Overland Park, KS',
    projectType: 'Event Venue',
    projectYear:'2021',
    fixtureType: 'installation'
  },
  {
    id: 'p5',
    title: 'Sunda New Asian',
    desc: 'Custom light installation and fixtures throughout sushi bar as Sunda Fulton Market.',
    image: '/src/assets/sunda.jpg',
    location: 'Chicago, IL',
    projectType: 'Restaurant',
    projectYear:'2024',
    fixtureType: 'chandelier, lantern ,installation'
  },
  {
    id: 'p6',
    title: 'Megalopolis',
    desc: 'Custom light fixtures for Megalopolis movie by Francis Ford Coppola.',
    image: '/src/assets/megalopolis.JPEG',
    location: 'Hollywood, CA',
    projectType: 'Movie',
    projectYear:'2024',
    fixtureType: 'chandelier,pendant, sconce'
  },
]
</script>

<template>
  <section>
    <h1 class="title">Our Work</h1>
    <p>We work on everything from residential, hospitality, to commercial projects. </p>

    <section class="projects">
      <article v-for="p in projects" :key="p.id" class="card">
        <div class="working">
          <img class="project-image" :src="p.image" alt="" />
        </div>
        <h2 style="margin: 10px 0 6px">{{ p.title }}</h2>
        <p class="location" style="margin: 0">{{ p.location }}</p>
        <p style="margin: 0">{{ p.desc }}</p>

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

.location{
  padding-bottom: 10px;
  font-size: 12px;
  text-transform: uppercase;
  color: dodgerblue;
}

</style>
