<script setup lang="ts">
import TodosContainer from './components/TodosContainer.vue';
</script>

<template>
  <main class="background">
    <TodosContainer />
  </main>
</template>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgb(207, 211, 227);
}
</style>
