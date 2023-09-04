<script setup lang="ts">
import { createTodo, type Todo } from '@/services/api';
import { ref } from 'vue';

const props = defineProps<{
  todos: Todo[];
}>();
const newTodo = ref<string>('');
const todos = ref(props.todos);

async function onSubmit() {
  const todo = await createTodo(newTodo.value);
  todos.value.push(todo);
  newTodo.value = '';
  console.log(todo);
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="newTodo" />
      <button>+</button>
    </form>
  </div>
</template>

<style scoped></style>
