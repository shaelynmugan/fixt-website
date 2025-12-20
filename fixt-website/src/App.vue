<script setup>
</script>

<template>
  <section class="container">
    <nav>
      <div class="logo">
        <router-link :to="{ name: 'home' }"><img src="./assets/my-logo.gif" alt="logo"></router-link>
      </div>
      <div class="links">
        <router-link :to="{ name: 'our-work' }">Our Work</router-link>
        <router-link :to="{ name: 'about' }">About us</router-link>
        <router-link :to="{ name: 'request-for-quote' }">Request for Quote</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
        <a href="https://fixtelectric.com">Vintage</a>
      </div>
    </nav>

    <section class="page-content">
      <router-view />
    </section>
  </section>
</template>

<style scoped>
section.container {
  width: 90vw;
  height: 90vh;
  border: 1px solid black;

  nav {
    display: flex;
    justify-content: space-between;

    > * {
      border: 1px solid black;
    }

    .links {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>
