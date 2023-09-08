<script setup lang="ts">
import { ref } from 'vue';
import { useTodosStore } from '../stores/todolist';

const name = ref<string>('');
const store = useTodosStore();

function addItemAndClear(newTodo: string) {
  if (newTodo.length === 0) {
    return;
  }
  store.createTodo(newTodo);
  name.value = '';
}
</script>

<template>
  <div>
    <p>Create a new todo:</p>
    <form @submit.prevent="addItemAndClear(name)">
      <input v-model="name" type="text" /><button>+</button>
    </form>
  </div>
</template>

<style scoped>
button {
  border: none;
  background-color: rgb(255, 192, 192);
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  color: white;
  cursor: pointer;
}

p {
  color: #7899b6;
}
</style>
