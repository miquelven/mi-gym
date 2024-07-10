<script setup>
import Header from "./components/Header/index.vue";
import Banner from "./components/Banner/index.vue";
import About from "./components/About/index.vue";
import Modalities from "./components/Modalities/index.vue";
import Team from "./components/Team/index.vue";
import PlansArea from "./components/PlansArea/index.vue";
import ReviewArea from "./components/ReviewArea/index.vue";
import ToTopButton from "./components/ToTopButton/index.vue";
import Footer from "./components/Footer/index.vue";

import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();
</script>

<template>
  <Header />
  <Banner />
  <About />
  <Modalities />
  <Team />
  <PlansArea />
  <ReviewArea />
  <ToTopButton />
  <Footer />
</template>
