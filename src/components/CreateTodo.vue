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
    <form @submit.prevent="addItemAndClear(name)">
      <input v-model="name" type="text" /><button>Add</button>
    </form>
  </div>
</template>

<style scoped></style>
