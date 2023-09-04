<script setup lang="ts">
import CreateTodo from './CreateTodo.vue';
import TodoList from './TodoList.vue';
import { onMounted, ref } from 'vue';
import { getTodos, type Todo } from '@/services/api';

const todos = ref<Todo[]>([]);

onMounted(async () => {
  todos.value = await getTodos();
});
</script>

<template>
  <div class="Container">
    <p>Add a new Todo:</p>
    <CreateTodo :todos="todos" />
    <TodoList :todos="todos" />
  </div>
</template>

<style scoped></style>
