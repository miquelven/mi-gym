<script setup>
import Container from "../Container/index.vue";

import aboutImg from "../../assets/imgs/about.webp";
</script>

<template>
  <section id="sobre" class="my-40">
    <Container>
      <div
        class="grid grid-cols-2 gap-20 max-xl:gap-10 max-lg:flex max-lg:flex-col-reverse max-lg:gap-14 max-sm:gap-8"
      >
        <img
          :src="aboutImg"
          alt="Imagem do mulher com pesos na mão"
          class="object-cover object-center w-full h-full rounded-md border-2 border-white/40"
        />

        <div class="flex flex-col gap-10">
          <h2 class="font-bold text-6xl max-sm:text-4xl">
            Por que nos escolher
          </h2>

          <div
            class="font-light text-lg flex flex-col gap-10 max-sm:text-base max-sm:gap-4"
          >
            <p>
              Na nossa academia, você encontra uma equipe de treinadores
              qualificados e experientes, pronta para ajudar você a alcançar
              seus objetivos de fitness com uma abordagem inovadora. Nossas
              instalações contam com equipamentos de última geração e um
              ambiente limpo e seguro, garantindo conforto e eficiência nos
              treinos.
            </p>
            <p>
              Oferecemos programas de treino personalizados para atender suas
              necessidades específicas, seja perder peso, ganhar massa muscular
              ou melhorar a resistência. Além disso, nossa comunidade motivadora
              e solidária torna seus treinos mais divertidos e envolventes.
            </p>
            <p>
              Com planos de adesão variados e horários flexíveis, você pode
              treinar quando for mais conveniente para você. Venha fazer parte
              da nossa academia e transforme sua vida hoje mesmo!
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
