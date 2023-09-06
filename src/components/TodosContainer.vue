<script setup lang="ts">
import TodoList from './TodoList.vue';
import CreateTodo from './CreateTodo.vue';
import { useTodosStore } from '@/stores/todolist';
import { onMounted } from 'vue';
const { fetchTodos } = useTodosStore();

onMounted(() => {
  fetchTodos();
});
</script>

<template>
  <div class="create">
    <p>Add a new Todo:</p>
    <CreateTodo />
  </div>
  <div class="listOfTodos">
    <TodoList />
  </div>
</template>

<style scoped></style>
