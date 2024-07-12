<script setup>
import Container from "../Container/index.vue";
import SectionTitle from "../SectionTitle/index.vue";
import WhatsappButton from "../WhatsappButton/index.vue";
import plansImg from "../../assets/imgs/plans.webp";
import plansData from "../../data/plansData";

import { Slide } from "vue3-carousel";
import CarouselContainer from "../CarouselContainer/index.vue";
</script>

<template>
  <section
    id="planos"
    class="relative z-10 h-full w-full bg-no-repeat bg-top bg-cover py-20 max-sm:-scroll-mt-36"
    :style="{ backgroundImage: `url(${plansImg})` }"
  >
    <div class="absolute z-10 inset-0 bg-black/80"></div>
    <Container>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="relative z-20 flex flex-col gap-20 items-center justify-center"
      >
        <SectionTitle colorText="white"> Planos Disponíveis </SectionTitle>

        <ul
          class="grid grid-cols-3 gap-10 justify-between max-xl:grid-cols-2 max-md:grid-cols-1"
        >
          <li
            v-for="plans in plansData"
            :key="plans.id"
            class="transition-all duration-500 bg-black/50 p-8 flex flex-col justify-between gap-8 shadow-md shadow-black max-xl:last:col-span-2 max-xl:last:items-center max-xl:last:w-3/5 max-xl:last:mx-auto max-md:last:col-span-1 max-md:last:w-full max-md:last:items-start max-sm:hidden hover:bg-black/70"
          >
            <h6 class="text-3xl font-bold uppercase">{{ plans.title }}</h6>

            <ul class="flex flex-col gap-5">
              <li v-for="benefits in plans.benefits" :key="benefits">
                <p class="font-light text-lg">
                  {{ benefits }}
                </p>
              </li>
            </ul>

            <div>
              <span class="text-3xl font-bold">
                {{ plans.pricing }}
              </span>
              <span class="uppercase text-xl font-medium">/mês</span>
            </div>

            <WhatsappButton />
          </li>

          <component :is="CarouselContainer" class="hidden max-sm:block">
            <Slide
              v-for="plans in plansData"
              :key="plans.id"
              class="bg-black/50 p-8 flex flex-col justify-between gap-8 shadow-md shadow-black"
            >
              <h6 class="text-3xl font-bold uppercase">{{ plans.title }}</h6>

              <ul class="flex flex-col items-start gap-5">
                <li
                  v-for="benefits in plans.benefits"
                  :key="benefits"
                  class="text-start"
                >
                  <p class="font-light text-sm">
                    {{ benefits }}
                  </p>
                </li>
              </ul>

              <div>
                <span class="text-2xl font-bold">
                  {{ plans.pricing }}
                </span>
                <span class="uppercase text-xl font-medium">/mês</span>
              </div>

              <WhatsappButton />
            </Slide>
          </component>
        </ul>
      </div>
    </Container>
  </section>
</template>
