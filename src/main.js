import { createApp } from "vue";
import { router } from "@/router/router";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./index.css";
import "flowbite";
import "./firebase/firebase";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");