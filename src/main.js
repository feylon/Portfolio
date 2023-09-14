import { createApp } from 'vue'
import { createPinia } from 'pinia';
import routers from "./../routers/index.js";
import navbar from "./components/navbar.vue";
import "../stillar_uchun.js";
import App from './App.vue'
let pinia = createPinia();
let app = createApp(App);
app.component("navbar",navbar);
app.use(routers);
app.use(pinia);
app.mount('#app');
