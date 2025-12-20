<script setup>
import AccordianFile from '@/pages/AccordianFile.vue'
</script>

<template>
  <section class="about">
    <header class="head">
      <h1 class="title">About Us</h1>
      <p class="lede"> We are a small company with big ideas. </p>
    </header>

    <div class="layout">
      <div class="accordionCol">
        <AccordianFile title="What We Do Best">
          <p>We got our start in vintage lighting, building a deep understanding of craftsmanship, materials, and timeless design. That foundation gives us the experience to create and source exceptional lighting today—working with trusted partners around the world while also collaborating with local fabricators to deliver pieces that are distinctive, well-made, and built to last.</p>
        </AccordianFile>

        <AccordianFile title="Our Story">
          <p>Our story began with a deep appreciation for vintage lighting and a bold leap of faith. Early on, we purchased thousands of original light fixtures from Ukraine and arranged for them to be shipped back, piece by piece. What started as a passion for salvaging and restoring well-made lighting quickly grew into a full-scale vintage lighting business.

            Working so closely with historic fixtures gave us a rare, hands-on education in materials, construction, and timeless design. Over time, that knowledge naturally evolved into something more. Clients began asking for custom solutions—lighting inspired by the past but built for modern spaces. In response, we transitioned from restoration and resale into custom lighting manufacturing.

            Today, we blend global sourcing with partnerships among skilled local fabricators to create custom lighting that honors traditional craftsmanship while meeting contemporary standards. Our roots in vintage lighting remain at the core of everything we do, informing each design with experience, intention, and respect for quality..</p>
        </AccordianFile>

        <AccordianFile title="Our Staff">
          <p>With a small, skilled staff, we take a hands-on approach to every project. Our experience allows us to work efficiently, collaborate closely, and maintain a high level of craftsmanship from start to finish..</p>
        </AccordianFile>
      </div>

      <figure class="imageCol">
        <img class="img" src="/src/assets/megalopolis.JPEG" alt="" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.about {
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

.layout {
  display: grid;
  gap: 18px;
}

@media (min-width: 960px) {
  .layout {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: start;
  }
}

.accordionCol {
  display: grid;
  gap: 12px;
}

.imageCol {
  margin: 0;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  overflow: hidden;
}

.img {
  width: 100%;
  height: clamp(280px, 40vw, 520px);
  object-fit: cover;
  display: block;
}
</style>
