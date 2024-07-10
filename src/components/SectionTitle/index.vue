<script setup>
defineProps(["textColor"]);
</script>

<template>
  <h2
    data-aos="fade-up"
    data-aos-delay="400"
    data-aos-duration="1000"
    class="text-center text-4xl font-bold uppercase"
    :style="{ color: textColor }"
  >
    <slot />
  </h2>
</template>
