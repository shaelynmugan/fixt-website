<script setup>
import svg1 from '@/assets/logo.svg?component'

</script>

<template>
  <section class="container">
    <nav class="navbar">
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <svg1 class="homeIcon"/>
        </router-link>
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
  width: 100vw;
  height: 100vh;
  padding: 20px;
  border: 1px solid black;

  nav {
    display: flex;
    justify-content: space-between;

    > * {
      border: 1px solid black;
    }

    .links {
      padding: 5px;
      align-items: center;
      display: flex;
      gap: 1rem;
    }

  }
}
</style>
