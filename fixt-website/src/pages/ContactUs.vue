<script setup></script>

<template>
  <section class="contact">
    <header class="head">
      <h1 class="title">Contact</h1>
      <p class="lede">Reach out and we’ll get back to you.</p>
    </header>

    <div class="card">
      <p><strong>Email:</strong> sales@fixtelectric.com</p>
      <p><strong>Phone:</strong> 763-954-1943</p>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: grid;
  gap: 18px;
}

.head {
  padding-top: 18px;
}

.lede {
  margin: 0;
  color: var(--muted);
  max-width: 70ch;
}

.card {
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  padding: 14px;
  background: #fff;
  max-width: 100vw;
}

.card p {
  margin: 0 0 8px;
  color: var(--muted);
}

.card p:last-child {
  margin-bottom: 0;
}
</style>
