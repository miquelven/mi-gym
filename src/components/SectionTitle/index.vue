<script setup>
defineProps(["textColor"]);
</script>

<template>
  <h2
    class="text-center text-4xl font-bold uppercase"
    :style="{ color: textColor }"
  >
    <slot />
  </h2>
</template>
