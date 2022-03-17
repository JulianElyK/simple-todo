<script setup>
import Todo from "@/components/Todo.vue";
import Pagination from "@/components/Pagination.vue";
import FormTodo from "@/components/FormTodo.vue";
import { todostore } from "@/stores/todostore.js";
import { paginationstore } from "@/stores/paginationstore.js";
</script>

<template>
  <main
    class="flex-1 flex flex-col justify-between font-mono divide-y-4 divide-cyan-600"
  >
    <div class="flex-1 flex flex-col justify-between pb-1">
      <div class="max-h-100 divide-y-2 divide-cyan-200 p-2">
        <Todo
          v-for="todo in paginateTodos()"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :desc="todo.desc"
          :datetime="todo.datetime"
          :done="todo.isDone"
          @markDone="todostore.markTodoToggle(todo)"
          @delete="todostore.deleteTodo(todo)"
        />
      </div>
      <Pagination
        :maxContents="paging.maxContents"
        :maxPages="paging.maxPages"
        :currentPage="paging.currentPage"
        @backPage="backPage"
        @changePage="toPage"
        @nextPage="nextPage"
      />
    </div>
    <FormTodo @addTodo="addTodo"/>
  </main>
</template>

<script>
export default {
  data() {
    return {
      paging: {},
      todos: [],
    };
  },
  mounted() {
    this.todos = todostore.todos
    this.paging = paginationstore.paging
  },
  updated() {
    this.changeMaxPages()
  },
  methods: {
    addTodo(title, desc, datetime) {
      var newTodo = {
        id: todostore.getNextId(),
        title: title,
        desc: desc,
        datetime: datetime,
        isDone: 0
      }

      todostore.addFirstTodo(newTodo)
    },
    changeMaxPages() {
      let pMax = this.paging.maxPages*this.paging.maxContents
      if (this.todos.length/pMax > 1)
        this.paging.maxPages ++
      else if (this.todos.length/(pMax-this.paging.maxContents) <= 1)
        this.paging.maxPages --
        if (this.paging.currentPage > this.paging.maxPages)
          this.toPage(this.paging.maxPages)
    },
    nextPage() {
      let next = this.paging.firstContentIndex + this.paging.maxContents
      if(next >= this.todos.length)
        return
      this.paging.firstContentIndex = next
      this.paging.currentPage ++
    },
    backPage() {
      let next = this.paging.firstContentIndex - this.paging.maxContents
      if(next < 0)
        return
      this.paging.firstContentIndex = next
      this.paging.currentPage --
    },
    toPage(page) {
      this.paging.firstContentIndex = (page - 1) * this.paging.maxContents
      this.paging.currentPage = page
    },
    paginateTodos() {
      const maxIndex = this.paging.maxContents + this.paging.firstContentIndex
      return this.todos.slice(this.paging.firstContentIndex, maxIndex)
    },
  },
};
</script>
