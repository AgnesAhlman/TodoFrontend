<script setup lang="ts">
import { createTodo, type Todo } from '@/services/api';
import { ref } from 'vue';

const newTodo = ref<string>('');
const todos = ref<Todo[]>([]);

async function onSubmit() {
  const todo = await createTodo(newTodo.value);
  todos.value.push(todo);
  newTodo.value = '';
}
</script>

<template>
  <div>
    <p>Add a new Todo:</p>

    <form @submit.prevent="onSubmit">
      <input v-model="newTodo" />
      <button>+</button>
    </form>
  </div>
</template>

<style scoped></style>
