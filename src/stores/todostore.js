import { reactive } from 'vue'

export const todostore = reactive({
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
  nextId: 11,

  getNextId() {
    return this.nextId++
  },
  addFirstTodo(todo) {
    this.todos.unshift(todo)
  },
  markTodoToggle(todo){
    const todoIndex = this.todos.indexOf(todo)
    this.todos[todoIndex].isDone = 1-this.todos[todoIndex].isDone
  },
  deleteTodo(todo) {
    const todoIndex = this.todos.indexOf(todo)
    this.todos.splice(todoIndex, 1)
  }
})