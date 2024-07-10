<script setup>
import Container from "../Container/index.vue";

import linksData from "../../data/linksData";

import { ref } from "vue";

const showMenu = ref(true);
</script>

<template>
  <header class="relative py-5 shadow-sm shadow-white/10">
    <Container>
      <div class="flex justify-between items-center">
        <h1>Logo</h1>

        <nav
          class="transition-all duration-500 max-md:fixed max-md:right-0 max-md:top-[-80vh] max-md:h-[80vh] max-md:w-screen max-md:bg-[#0a0a0a] max-md:flex max-md:justify-center max-md:items-center max-md:shadow-sm max-md:shadow-white/10 max-md:z-[-1] max-md:opacity-0 max-sm:h-screen"
          :class="
            !showMenu
              ? 'max-md:opacity-100 max-md:z-20 max-md:top-[0vh]'
              : 'max-md:opacity-0 max-md:z-[-1] max-md:top-[-80vh] max-sm:top-[-100vh]'
          "
        >
          <ul class="flex items-center max-md:flex-col max-md:gap-16">
            <li v-for="link in linksData" :key="link.id" class="px-6">
              <a :href="link.href">
                <span
                  class="transition-all duration-300 font-light text-lg hover:text-[#ef233c] max-md:font-semibold max-md:uppercase max-md:text-xl"
                >
                  {{ link.text }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <button
          class="hidden relative z-30 max-md:block"
          @click="
            () => {
              showMenu = !showMenu;
            }
          "
        >
          <v-icon
            v-if="showMenu"
            name="fa-bars"
            class="w-8 h-8 hover:scale-105"
          />
          <v-icon v-else name="io-close" class="w-8 h-8 hover:scale-105" />
        </button>
      </div>
    </Container>
  </header>
</template>
