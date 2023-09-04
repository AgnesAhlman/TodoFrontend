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
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(234, 200, 167);
}
</style>
