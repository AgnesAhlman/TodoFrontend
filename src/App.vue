<script setup lang="ts">
import TodoList from './components/TodoList.vue';
import CreateTodo from './components/CreateTodo.vue';
</script>

<template>
  <main class="background">
    <CreateTodo />
    <TodoList />
  </main>
</template>

<style scoped>
.background {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(234, 200, 167);
}
</style>
