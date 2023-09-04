<script setup lang="ts">
import CreateTodo from './CreateTodo.vue';
import TodoList from './TodoList.vue';
import { onMounted, ref } from 'vue';
import { createTodo, deleteTodo, getTodos, type Todo } from '@/services/api';

const todos = ref<Todo[]>([]);

onMounted(async () => {
  console.log('Mounted TodosContainer');
  const myTodos = await getTodos();
  console.log(myTodos);
  todos.value = myTodos;
  console.log('Successfully fetched todos', todos.value);
});

async function onSubmit(newTodo: string) {
  const todo = await createTodo(newTodo);
  todos.value.push(todo);
  console.log(todo);
}

async function removeTodo(todo: Todo) {
  const isSuccess = await deleteTodo(todo.id);
  if (isSuccess) {
    todos.value = todos.value.filter((t) => t !== todo);
  } else {
    console.error('Failed to delete todo with ID:', todo.id);
  }
}
</script>

<template>
  <div class="create">
    <p>Add a new Todo:</p>
    <CreateTodo :onSubmit="onSubmit" />
  </div>
  <div class="listOfTodos">
    <TodoList :todos="todos" :removeTodo="removeTodo" />
  </div>
</template>

<style scoped></style>
