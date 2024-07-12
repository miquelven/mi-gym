<script setup>
import Container from "../Container/index.vue";
import SectionTitle from "../SectionTitle/index.vue";
import SocialMediaIcons from "../SocialMediaIcons/index.vue";

import teamData from "../../data/teamData";

import { Slide } from "vue3-carousel";
import CarouselContainer from "../CarouselContainer/index.vue";
</script>

<template>
  <section
    id="equipe"
    class="bg-[#f3f0f1] text-black py-32 max-sm:-scroll-mt-32"
  >
    <Container>
      <SectionTitle textColor="black"> Nossa Equipe </SectionTitle>

      <ul
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="grid grid-cols-4 gap-10 mt-20 max-xl:gap-3 max-lg:grid-cols-2 max-lg:gap-y-14 max-sm:grid-cols-1"
      >
        <li v-for="team in teamData" :key="team.id" class="block max-sm:hidden">
          <div class="flex flex-col gap-5 justify-center items-center">
            <div class="w-full h-full overflow-hidden">
              <img
                :src="team.src"
                alt="Imagem do treinador"
                class="transition-all duration-500 object-cover object-center w-full h-80 shadow-md rounded-md shadow-black/40 hover:scale-110 hover:brightness-75 max-xl:h-60"
              />
            </div>
            <div class="flex flex-col justify-center items-center">
              <h6 class="font-bold text-2xl">
                {{ team.name }}
              </h6>
              <span class="text-semibold t">{{ team.job }}</span>
            </div>

            <SocialMediaIcons />
          </div>
        </li>

        <component :is="CarouselContainer" class="hidden max-sm:block">
          <Slide v-for="team in teamData" :key="team.id">
            <div class="flex flex-col gap-5 justify-center items-center mb-10">
              <div class="w-full h-full overflow-hidden">
                <img
                  :src="team.src"
                  alt="Imagem do treinador"
                  class="transition-all duration-500 object-cover object-center shadow-md rounded-md shadow-black/40 hover:scale-110 hover:brightness-75 h-60"
                />
              </div>
              <div class="flex flex-col justify-center items-center">
                <h6 class="font-bold text-2xl">
                  {{ team.name }}
                </h6>
                <span class="text-semibold t">{{ team.job }}</span>
              </div>

              <SocialMediaIcons />
            </div>
          </Slide>
        </component>
      </ul>
    </Container>
  </section>
</template>
