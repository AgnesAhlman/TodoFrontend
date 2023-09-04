<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  onSubmit: (newTodo: string) => Promise<void>;
}>();

const newTodo = ref<string>('');

async function _onSubmit() {
  console.log(newTodo.value);
  await props.onSubmit(newTodo.value);
  newTodo.value = '';
}
</script>

<template>
  <div>
    <form @submit.prevent="_onSubmit">
      <input v-model="newTodo" />
      <button>+</button>
    </form>
  </div>
</template>

<style scoped></style>
