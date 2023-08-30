<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { createTodo, deleteTodo, getTodos, type Todo } from '../services/api';

const todos = ref<Todo[]>([]); // Explicitly specify the type
const newTodo = ref<string>('');

const options: Intl.DateTimeFormatOptions = {
  month: 'numeric',
  day: 'numeric',
};
const dateFormatter = new Intl.DateTimeFormat('sv-SE', options);

onMounted(async () => {
  todos.value = await getTodos();
});

async function onSubmit() {
  const todo = await createTodo(newTodo.value);
  todos.value.push(todo);
  newTodo.value = '';
}

async function removeTodo(todo: Todo) {
  const isSuccess = await deleteTodo(todo.id);
  if (isSuccess) {
    todos.value = todos.value.filter((t) => t !== todo);
  } else {
    console.error('Failed to delete todo with ID:', todo.id);
  }
}
</script>

<template>
  <div>
    <h1>Todo</h1>
    <div v-if="todos">
      <h5>Here are your todos:</h5>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.name }} {{ dateFormatter.format(new Date(todo.createdAt)) }}
          <button @click="removeTodo(todo)">X</button>
        </li>
      </ul>
    </div>
    <form @submit.prevent="onSubmit">
      <input v-model="newTodo" />
      <button>Add Todo</button>
    </form>
  </div>
</template>

<style scoped></style>
