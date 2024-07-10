import { createApp } from "vue";
import "./style.css";
import "./main.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaBars,
  IoClose,
  BiWhatsapp,
  CoFacebookF,
  BiTwitter,
  RiInstagramFill,
  IoLocationSharp,
  BiTelephoneFill,
  MdEmail,
} from "oh-vue-icons/icons";

addIcons(
  FaBars,
  IoClose,
  BiWhatsapp,
  CoFacebookF,
  BiTwitter,
  RiInstagramFill,
  IoLocationSharp,
  BiTelephoneFill,
  MdEmail
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#app");
