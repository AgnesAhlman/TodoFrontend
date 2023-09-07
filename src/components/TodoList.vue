<script setup lang="ts">
import { useTodosStore } from '../stores/todolist';
import { storeToRefs } from 'pinia';
const store = useTodosStore();

const { removeTodo, updateTodoStatus } = store;
const { todos } = storeToRefs(store);

const options: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
};
const dateFormatter = new Intl.DateTimeFormat('sv-SE', options);
</script>

<template>
  <div class="container">
    <h1>Todo</h1>
    <div>
      <h5>Here are your todos:</h5>
      <ul>
        <li v-for="todo in todos" :key="todo.id" class="item" @change="updateTodoStatus(todo)">
          <input type="checkbox" v-model="todo.isComplete" />
          {{ todo.name }} {{ dateFormatter.format(new Date(todo.createdAt)) }}
          <button @click="removeTodo(todo.id)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background-color: antiquewhite;
}

li {
  list-style: none;
}
</style>
