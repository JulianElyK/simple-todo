<template>
  <div class="flex flex-row justify-center space-x-2">
    <input
      class="hover:cursor-pointer hover:bg-slate-400 w-6 h-6 bg-gray-200 rounded-md"
      type="button"
      value="<"
      @click="$emit('backPage')"
    />
    <input
      class="hover:cursor-pointer hover:bg-slate-400 w-6 h-6 bg-slate-200 rounded-md"
      type="button"
      v-for="i in maxPages"
      :key="i"
      :value="i"
      @click="$emit('changePage', i)"
      :disabled="i == {currentPage}"
      :class="{'hover:cursor-auto bg-slate-400': i == currentPage}"
    />
    <input
      class="hover:cursor-pointer hover:bg-slate-400 w-6 h-6 bg-gray-200 rounded-md"
      type="button"
      value=">"
      @click="$emit('nextPage')"
    />
  </div>
</template>

<script>
export default {
  props: [
    "maxContents",
    "maxPages",
    "currentPage",
  ]
}
</script>

<style>

</style>