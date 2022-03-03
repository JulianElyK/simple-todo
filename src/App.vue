<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="flex flex-row justify-center h-screen w-full bg-cyan-500">
    <div
      class="flex flex-col mx-10 my-5 p-5 xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-2/3 w-full rounded-xl divide-y-4 divide-sky-600 bg-sky-50"
    >
      <Header />
      <RouterView />
    </div>
  </div>
</template>

<style></style>
