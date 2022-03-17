<template>
  <form class="flex flex-col p-2 space-y-1">
      <input
        v-model="title"
        class="p-1 rounded-l"
        type="text"
        placeholder="Title"
      />
      <input
        v-model="desc"
        class="p-1 rounded-l"
        type="text"
        placeholder="Description..."
      />
      <input
        v-model="datetime"
        class="p-1 rounded-l"
        type="datetime-local"
      />
      <button
        @click="onFormSubmit"
        class="p-1 rounded-l bg-blue-300 hover:bg-blue-600 tracking-widest"
        type="submit"
      >
        ADD
      </button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      desc: "",
      datetime: "",
    }
  },
  methods: {
    onFormSubmit(e) {
      e.preventDefault()
      
      const title = this.title
      const desc = this.desc
      const datetime = this.datetime

      this.title = ""
      this.desc = ""
      this.datetime = ""
      this.$emit('addTodo', title, desc, datetime)
    }
  }
}
</script>

<style>

</style>