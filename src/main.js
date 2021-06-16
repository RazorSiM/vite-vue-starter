import "./assets/styles.css";
import "virtual:windi.css";

import App from "/@/App.vue";
import BaseLayout from "./layouts/Base.vue";
import EmptyLayout from "./layouts/Empty.vue";
import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { pinia } from "./stores";
import router from "/@/router";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(pinia);
app.use(head);
app.component("BaseLayout", BaseLayout);
app.component("EmptyLayout", EmptyLayout);
app.mount("#app");
