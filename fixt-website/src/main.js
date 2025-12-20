import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "/Users/shaelynmugan/Library/CloudStorage/GoogleDrive-mugan005@umn.edu/My Drive/fall 25/web design/fixt-website/src/pages/style.css";


const app = createApp(App)

app.use(router)

app.mount('#app')
