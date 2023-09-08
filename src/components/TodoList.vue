<script setup lang="ts">
import { useTodosStore } from '../stores/todolist';
import { storeToRefs } from 'pinia';
const store = useTodosStore();

const { removeTodo, updateTodoStatus } = store;
const { todos } = storeToRefs(store);

const options: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
};
const dateFormatter = new Intl.DateTimeFormat('sv-SE', options);
</script>

<template>
  <div class="container">
    <div class="todo">
      <div v-for="todo in todos" :key="todo.id" class="item" @change="updateTodoStatus(todo)">
        <div class="test">
          <div class="todo-inner">
            <div class="check-and-title">
              <input type="checkbox" v-model="todo.isComplete" />
              <input class="hej" type="text" v-model="todo.name" />
            </div>
            <p class="created-at">
              Created at: {{ dateFormatter.format(new Date(todo.createdAt)) }}
            </p>
          </div>
          <div class="buttons">
            <button @click="removeTodo(todo.id)">x</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: rgb(255, 255, 255);
}

.hej {
  background-color: transparent;
  border: 0;
  outline: 0;
}

.hej:focus {
  border-bottom: 2px solid tomato;
}

.test {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(232, 234, 244);
  border-radius: 0.2rem;
}

.todo-inner {
  padding: 1rem;
}
.check-and-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
}

.item {
  border-radius: 0.3rem;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(254, 199, 98);
  padding: 0.5rem;
  gap: 00.5rem;
}

button {
  border: none;
  background-color: rgb(250, 239, 206);
}

li {
  list-style: none;
}

.created-at {
  font-style: italic;
  color: rgb(190, 184, 184);
  font-size: 0.7rem;
}
</style>
