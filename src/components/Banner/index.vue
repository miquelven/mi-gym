<script setup>
import Container from "../Container/index.vue";
import bannerImg from "../../assets/imgs/banner.png";
</script>

<template>
  <main
    class="relative z-10 h-[85vh] w-full bg-no-repeat bg-top bg-cover max-sm:h-[70vh]"
    :style="{ backgroundImage: `url(${bannerImg})` }"
  >
    <div class="absolute z-10 inset-0 bg-black/70"></div>

    <Container>
      <div
        class="relative z-20 flex h-[85vh] items-center justify-end max-sm:h-[70vh] max-sm:justify-start"
      >
        <div class="flex flex-col gap-8">
          <div class="uppercase flex flex-col gap-2">
            <h1
              data-aos="fade-left"
              class="text-[#ef233c] text-7xl font-bold drop-shadow-lg shadow-black max-lg:text-6xl max-sm:text-5xl"
            >
              Treine Duro
            </h1>
            <h2
              data-aos="fade-left"
              data-aos-delay="400"
              class="text-5xl font-bold drop-shadow-lg shadow-black max-lg:text-4xl max-sm:text-3xl"
            >
              Para obter o sucesso
            </h2>
          </div>

          <div>
            <p
              data-aos="fade-left"
              data-aos-delay="500"
              class="drop-shadow-lg shadow-black font-light text-xl max-lg:text-base max-sm:text-sm"
            >
              Comece pegando inspirações, continue para dar inspirações
            </p>
          </div>
        </div>
      </div>
    </Container>
  </main>
</template>
