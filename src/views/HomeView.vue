<script setup>
import Todo from "@/components/Todo.vue";
import Pagination from "@/components/Pagination.vue";
import FormTodo from "@/components/FormTodo.vue";
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
          @markDone="markTodoToggle(todo)"
          @delete="deleteTodo(todo)"
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
      paging: {
        maxContents: 5,
        maxPages: 2,
        firstContentIndex: 0,
        currentPage: 1
      },
      todos: [
        {
          id: 1,
          title: "Do the dishes",
          desc: "Wash all the dishes until perfect clean",
          datetime: "2022-02-23T10:00",
          isDone: 1,
        },
        {
          id: 2,
          title: "Do shopping",
          desc: "Buy daily necessities",
          datetime: "2022-02-24T11:00",
          isDone: 0,
        },
        {
          id: 3,
          title: "Do the dishes",
          desc: "Wash all the dishes until perfect clean",
          datetime: "2022-02-23T10:00",
          isDone: 1,
        },
        {
          id: 4,
          title: "Do shopping",
          desc: "Buy daily necessities",
          datetime: "2022-02-24T11:00",
          isDone: 0,
        },
        {
          id: 5,
          title: "Do the dishes",
          desc: "Wash all the dishes until perfect clean",
          datetime: "2022-02-23T10:00",
          isDone: 0,
        },
        {
          id: 6,
          title: "Do the dishes",
          desc: "Wash all the dishes until perfect clean",
          datetime: "2022-02-23T10:00",
          isDone: 1,
        },
        {
          id: 7,
          title: "Do shopping",
          desc: "Buy daily necessities",
          datetime: "2022-02-24T11:00",
          isDone: 0,
        },
        {
          id: 8,
          title: "Do the dishes",
          desc: "Wash all the dishes until perfect clean",
          datetime: "2022-02-23T10:00",
          isDone: 1,
        },
        {
          id: 9,
          title: "Do shopping",
          desc: "Buy daily necessities",
          datetime: "2022-02-24T11:00",
          isDone: 0,
        },
        {
          id: 10,
          title: "Do the dishes",
          desc: "Wash all the dishes until perfect clean",
          datetime: "2022-02-23T10:00",
          isDone: 0,
        },
      ],
    };
  },
  // computed: {
  //  computed is bugged lol
  // },
  methods: {
    addTodo(title, desc, datetime) {
      var newTodo = {
        id: this.todos.length + 1,
        title: title,
        desc: desc,
        datetime: datetime,
        isDone: 0
      }

      var todo = Object.assign({}, newTodo)
      this.todos.unshift(todo)
      this.changeMaxPages()
    },
    paginateTodos() {
      const maxIndex = this.paging.maxContents + this.paging.firstContentIndex
      return this.todos.slice(this.paging.firstContentIndex, maxIndex)
    },
    markTodoToggle(todo){
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].isDone = 1-this.todos[todoIndex].isDone
    },
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
      this.changeMaxPages()
    },
    changeMaxPages() {
      let pMax = this.paging.maxPages*this.paging.maxContents
      if (this.todos.length/pMax > 1)
        this.paging.maxPages ++
      else if (this.todos.length/(pMax-this.paging.maxContents) <= 1)
        this.paging.maxPages --
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
      this.paging.firstContent = (page - 1) * this.paging.maxContents
      this.paging.currentPage = page
    }
  },
};
</script>
