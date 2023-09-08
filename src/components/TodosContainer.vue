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
  <div class="wrapper">
    <div class="create">
      <h1>Todos</h1>
      <CreateTodo />
    </div>
    <div class="listOfTodos">
      <TodoList />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: white;
}
.create {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #234a6d;
  padding: 1rem;
  border-radius: 0rem 0rem 0rem 3rem;
}

h1 {
  color: #7899b6;
}
</style>
