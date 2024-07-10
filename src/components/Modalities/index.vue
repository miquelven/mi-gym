<script setup>
import WhatsappButton from "../WhatsappButton/index.vue";
import SectionTitle from "../SectionTitle/index.vue";

import modalitiesData from "../../data/modalitiesData";
</script>

<template>
  <section class="mt-72">
    <SectionTitle> Modalidades Disponíveis </SectionTitle>

    <ul class="grid grid-cols-2 mt-20 max-sm:grid-cols-1">
      <li
        v-for="modalities in modalitiesData"
        :key="modalities.id"
        class="relative flex flex-col justify-center items-center w-full h-[calc(100vh/2)] max-sm:h-[50vh]"
      >
        <div class="absolute bg-black/75 inset-0 z-10"></div>
        <img
          :src="modalities.src"
          alt="Imagem de uma pessoa na academia"
          class="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div
          class="relative z-20 w-full h-full flex flex-col justify-center items-center px-20 gap-8 max-lg:px-5"
        >
          <h4
            class="relative z-20 text-3xl font-bold after:content-[''] after:w-6 after:h-6 after:absolute after:-top-1 after:-left-2 after:bg-[#ef233c] after:z-[-1] max-md:text-2xl"
          >
            {{ modalities.title }}
          </h4>
          <p
            class="font-light text-lg text-center max-lg:text-base max-md:text-sm"
          >
            {{ modalities.text }}
          </p>
          <WhatsappButton />
        </div>
      </li>
    </ul>
  </section>
</template>
