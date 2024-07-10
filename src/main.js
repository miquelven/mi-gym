import { createApp } from "vue";
import "./style.css";
import "./main.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaBars, IoClose } from "oh-vue-icons/icons";

addIcons(FaBars, IoClose);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#app");
