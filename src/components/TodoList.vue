<script setup lang="ts">
import { ref } from 'vue';

interface Todo {
  id: number;
  name: string;
  isComplete: boolean;
}

const todos = ref<Todo[]>([]); // Explicitly specify the type

// Simulate an initial fetch
fetch('http://localhost:5053/api/TodoItems')
  .then((response) => response.json())
  .then((data) => (todos.value = data));

const newTodo = ref('');
let id = 1; // Initialize the id variable

function addTodo() {
  todos.value.push({ id: id++, name: newTodo.value, isComplete: false });
  newTodo.value = '';
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<template>
  <div>
    <h1>Todo</h1>
    <div v-if="todos">
      <h5>Here are your todos:</h5>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.name }} <button @click="removeTodo(todo)">X</button>
        </li>
      </ul>
    </div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" />
      <button>Add Todo</button>
    </form>
  </div>
</template>

<style scoped></style>
