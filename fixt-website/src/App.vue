<script setup>
import LogoIcon from '@/assets/logo.svg?component'
import InstagramIcon from '@/assets/instagram.svg?component'
import FacebookIcon from '@/assets/facebook.svg?component'

/**
 * Paste your real links here:
 */
const INSTAGRAM_URL = 'https://www.instagram.com/fixtelectric/?hl=en'
const FACEBOOK_URL = 'https://www.facebook.com/Fixtelectric/'
</script>

<template>
  <section class="app">
    <!-- NAV -->
    <nav class="navbar">
      <div class="navbarInner">
        <router-link :to="{ name: 'home' }" class="logoLink" aria-label="Go to homepage">
          <LogoIcon class="homeIcon" />
        </router-link>

        <div class="links">
          <router-link :to="{ name: 'our-work' }">Our Work</router-link>
          <router-link :to="{ name: 'about' }">About us</router-link>
          <router-link :to="{ name: 'request-for-quote' }">Request for Quote</router-link>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
          <a href="https://fixtelectric.com" rel="noopener" target="_blank">Vintage</a>
        </div>
      </div>
    </nav>

    <!-- PAGE -->
    <main class="page">
      <router-view />
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footerInner">
        <span class="brand">Fixt Lighting</span>

        <div class="socials">
          <a
            :href="INSTAGRAM_URL"
            target="_blank"
            rel="noopener"
            aria-label="Fixt Lighting on Instagram"
          >
            <InstagramIcon class="socialIcon" />
          </a>

          <a
            :href="FACEBOOK_URL"
            target="_blank"
            rel="noopener"
            aria-label="Fixt Lighting on Facebook"
          >
            <FacebookIcon class="socialIcon" />
          </a>
        </div>
      </div>
    </footer>
  </section>
</template>

<style>
/* Global design tokens + base */
:root {
  --bg: #ffffff;
  --text: #111111;
  --muted: #5f5f5f;

  --rule: rgba(17, 17, 17, 0.14);
  --rule-strong: rgba(17, 17, 17, 0.32);

  --accent: #d40000;

  --max: 1200px;
  --gutter: clamp(16px, 4vw, 40px);
  --radius: 14px;

  --font-sans: system-ui, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

html,
body {
  height: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
  text-decoration: none;
  text-underline-offset: 0.18em;
}

a:hover {
  text-decoration: underline;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
</style>

<style scoped>
/* App shell ensures footer sits at bottom on short pages */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* NAVBAR */
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100vw;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--rule);
}

.navbarInner {
  max-width: var(--max);
  margin: 0 auto;
  padding: 14px var(--gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.logoLink {
  display: inline-flex;
  align-items: center;
}

.homeIcon {
  width: 60px;
  height: 60px;
  display: block;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: center;
}

.links :deep(a) {
  font-size: 14px;
  padding: 6px 0;
  border-bottom: 1px solid transparent;
}

.links :deep(a:hover) {
  text-decoration: none;
  border-bottom-color: var(--rule-strong);
}

.links :deep(a.router-link-active) {
  border-bottom-color: var(--text);
}

/* MAIN */
.page {
  max-width: var(--max);
  margin: 0 auto;
  width: 100%;
  padding: clamp(20px, 3vw, 44px) var(--gutter);
}

/* FOOTER */
.footer {
  margin-top: auto;
  border-top: 1px solid var(--rule);
  background: #fff;
}

.footerInner {
  max-width: var(--max);
  margin: 0 auto;
  padding: 20px var(--gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand {
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--text);
}

.socials {
  display: flex;
  align-items: center;
  gap: 14px;
}

.socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.socialIcon {
  width: 18px;
  height: 18px;
  opacity: 0.75;
  transition: opacity 160ms ease;
}

.socials a:hover .socialIcon {
  opacity: 1;
}
</style>
