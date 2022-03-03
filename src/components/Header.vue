<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container p-2.5 mt-5 mb-1 text-center font-serif tracking-wider">
    <div class="text-5xl m-2.5">Todo List</div>
    <div class="divide-x-2 divide-cyan-900">
      <RouterLink class="py-1.5 px-2.5 hover:text-cyan-500" to="/"
        >Home</RouterLink
      >
      <RouterLink class="py-1.5 px-2.5 hover:text-cyan-500" to="/about"
        >About</RouterLink
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
