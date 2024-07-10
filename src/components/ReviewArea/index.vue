<script setup>
import { Slide } from "vue3-carousel";
import Container from "../Container/index.vue";
import SectionTitle from "../SectionTitle/index.vue";
import CarouselContainer from "../CarouselContainer/index.vue";
import reviewData from "../../data/reviewData";
</script>

<template>
  <section
    id="avaliacoes"
    class="pt-40 pb-20 bg-[#f3f0f1] text-black max-sm:-scroll-mt-72"
  >
    <Container>
      <SectionTitle textColor="black"> Algumas Avaliações </SectionTitle>

      <component :is="CarouselContainer" class="mt-14 max-sm:mt-8">
        <Slide v-for="review in reviewData" :key="review.id" class="py-10">
          <div class="flex flex-col gap-10">
            <img
              :src="review.src"
              alt="Imagem de uma pessoa sorrindo"
              class="object-cover object-center w-32 h-32 mx-auto shadow-md rounded-full shadow-black/40 max-sm:w-24 max-sm:h-24"
            />

            <div class="flex flex-col gap-5">
              <p class="text-lg max-sm:text-sm max-sm:px-10">
                {{ review.text }}
              </p>

              <h6 class="font-bold text-2xl max-sm:text-xl">
                {{ review.name }}
              </h6>
            </div>
          </div>
        </Slide>
      </component>
    </Container>
  </section>
</template>
