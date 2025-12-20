import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import AboutUs from '@/pages/AboutUs.vue'
import RequestForQuote from '@/pages/RequestForQuote.vue'
import OurWork from '@/pages/OurWork.vue'
import ContactUs from '@/pages/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Home should be "/"
    { path: '/', name: 'home', component: HomePage },


    { path: '/our-work', name: 'our-work', component: OurWork },
    { path: '/about', name: 'about', component: AboutUs },
    { path: '/request-for-quote', name: 'request-for-quote', component: RequestForQuote },
    { path: '/contact', name: 'contact', component: ContactUs },


  ],
})

export default router
