<script setup>
import Container from "../Container/index.vue";
import footerData from "../../data/footerData";
import logo from "../../assets/imgs/logoMiGym.webp";
</script>

<template>
  <footer class="pt-20">
    <Container>
      <ul
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        class="grid grid-cols-3 gap-20 font-light max-lg:grid-cols-2 max-lg:gap-y-28 max-md:grid-cols-1 max-md:gap-16"
      >
        <ul class="flex flex-col gap-8 max-sm:text-sm">
          <li>
            <img
              :src="logo"
              alt="Imagem da logo"
              class="w-10 h-10 objet-cover object-center invert"
            />
          </li>
          <li>
            <p>
              Bem-vindo ao MiGym, onde acreditamos que cada jornada para o
              fitness é única e fortalecedora
            </p>
          </li>
          <li>
            <p class="flex gap-3">
              <v-icon name="io-location-sharp" class="w-5 h-5" />
              Rua das Flores 123. Bairro Jardim das Rosas. São Paulo - SP,
              01234-567
            </p>
          </li>
          <li>
            <p class="flex gap-3">
              <v-icon name="bi-telephone-fill" class="w-5 h-5" />
              (11) 91234-5678
            </p>
          </li>
          <li>
            <p class="flex gap-3">
              <v-icon name="md-email" class="w-5 h-5" />
              contato@belezaexpress.com.br
            </p>
          </li>
        </ul>

        <ul class="grid grid-cols-3 gap-4">
          <h6 class="col-span-3 uppercase font-bold text-2xl max-sm:text-xl">
            Siga-nos nas Redes Sociais
          </h6>

          <li
            v-for="footerImg in footerData"
            :key="footerImg.id"
            class="relative"
          >
            <img
              :src="footerImg.src"
              alt="Imagem de uma pessoa na academia"
              class="object-cover obeject-center w-full h-full min-h-24"
            />
            <div
              class="absolute inset-0 z-10 text-transparent flex justify-center items-center hover:bg-black/50 hover:text-white cursor-pointer shadow-md shadow-white/5"
            >
              <v-icon name="ri-instagram-fill" />
            </div>
          </li>
        </ul>

        <ul class="flex flex-col gap-4">
          <h6 class="font-bold uppercase text-2xl max-sm:text-xl">
            Horário de Funcionamento
          </h6>

          <li class="flex flex-col gap-2">
            <p class="font-medium text-lg max-sm:text-base">Segunda - Sábado</p>
            <span class="max-sm:text-sm"> 09:00 - 21:00 </span>
          </li>

          <li class="flex flex-col gap-2">
            <p class="font-medium text-lg max-sm:text-base">Domingo</p>
            <span class="max-sm:text-sm">Fechado</span>
          </li>
        </ul>
      </ul>
    </Container>

    <div class="mt-24 py-5 border-t border-white/10">
      <p class="text-center font-light max-sm:text-sm">
        Desenvolvido por <span class="font-bold">Miquelven</span>
      </p>
    </div>
  </footer>
</template>
