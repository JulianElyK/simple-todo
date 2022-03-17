<script setup>
import Todo from "@/components/Todo.vue";
</script>

<template>
  <main
    class="flex-1 flex flex-col justify-between font-mono divide-y-4 divide-cyan-600"
  >
    <div class="flex-1 flex flex-col justify-between pb-1">
      <div class="max-h-100 divide-y-2 divide-cyan-200 p-2">
        <Todo
          v-for="(todo, index) in paginateTodos()"
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :desc="todo.desc"
          :datetime="todo.datetime"
          :done="todo.isDone"
          @markDone="markTodoToggle(index)"
          @delete="deleteTodo(index)"
        />
      </div>
      <div class="flex flex-row justify-center space-x-2">
        <input
          class="hover:cursor-pointer hover:bg-slate-400 w-6 h-6 bg-gray-200 rounded-md"
          type="button"
          value="<"
          @click="backPage"
        />
        <input
          class="hover:cursor-pointer hover:bg-slate-400 w-6 h-6 bg-slate-200 rounded-md"
          type="button"
          v-for="i in paging.maxPages"
          :key="i"
          :value="i"
          @click="toPage(i)"
          :disabled="i == paging.currentPage"
          :class="{'hover:cursor-auto bg-slate-400': i == paging.currentPage}"
        />
        <input
          class="hover:cursor-pointer hover:bg-slate-400 w-6 h-6 bg-gray-200 rounded-md"
          type="button"
          value=">"
          @click="nextPage"
        />
      </div>
    </div>
    <form class="flex flex-col p-2 space-y-1">
      <input
        v-model="newTodo.title"
        class="p-1 rounded-l"
        type="text"
        placeholder="Title"
      />
      <input
        v-model="newTodo.desc"
        class="p-1 rounded-l"
        type="text"
        placeholder="Description..."
      />
      <input
        v-model="newTodo.datetime"
        class="p-1 rounded-l"
        type="datetime-local"
      />
      <button
        @click="addTodo"
        class="p-1 rounded-l bg-blue-300 hover:bg-blue-600 tracking-widest"
        type="submit"
      >
        ADD
      </button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      paging: {
        maxContents: 5,
        maxPages: 2,
        firstContent: 0,
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
      newTodo: {
        id: null,
        title: "",
        desc: "",
        datetime: "",
        isDone: 0
      },
    };
  },
  // computed: {
  //  computed is bugged lol
  // },
  methods: {
    addTodo(e) {
      e.preventDefault()

      this.newTodo.id = this.todos.length

      var todo = Object.assign({}, this.newTodo)
      this.todos.unshift(todo)
      this.changeMaxPages()

      this.newTodo.title = ""
      this.newTodo.desc = ""
      this.newTodo.datetime = ""
    },
    paginateTodos() {
      return this.todos.slice(this.paging.firstContent,this.paging.maxContents)
    },
    markTodoToggle(index){
      let todoIndex = index + this.paging.firstContent
      this.todos[todoIndex].isDone = 1-this.todos[todoIndex].isDone
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
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
      let next = this.paging.firstContent + this.paging.maxContents
      if(next >= this.todos.length)
        return
      this.paging.firstContent = next
      this.paging.currentPage ++
    },
    backPage() {
      let next = this.paging.firstContent - this.paging.maxContents
      if(next < 0)
        return
      this.paging.firstContent = next
      this.paging.currentPage --
    },
    toPage(page) {
      this.paging.firstContent = (page - 1) * this.paging.maxContents
      this.paging.currentPage = page
    }
  },
};
</script>
