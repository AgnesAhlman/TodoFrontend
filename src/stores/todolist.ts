// src/store/todos.ts
import { defineStore } from 'pinia';
import {
  createTodo as apiCreateTodo,
  deleteTodo as apiDeleteTodo,
  getTodos as apiGetTodos,
  updateTodo as apiUpdateTodo,
  type Todo,
} from '@/services/api';

interface ITodoStore {
  todos: Todo[];
}

export const useTodosStore = defineStore('todos', {
  state: (): ITodoStore => ({
    todos: [],
  }),

  getters: {
    getTodos(): Todo[] {
      return this.todos;
    },
  },

  actions: {
    async fetchTodos() {
      const myTodos = await apiGetTodos();
      this.todos = myTodos;
    },

    async createTodo(newTodo: string) {
      const todo = await apiCreateTodo(newTodo);
      this.todos.push(todo);
    },

    async removeTodo(todoId: number) {
      const isSuccess = await apiDeleteTodo(todoId);
      if (isSuccess) {
        this.todos = this.todos.filter((t) => t.id !== todoId);
      } else {
        console.error('Failed to delete todo with ID:', todoId);
      }
    },

    async updateTodoStatus(todo: Todo) {
      // Update the todo in the API
      const updatedTodo = await apiUpdateTodo(todo);

      // Find the index of the updated todo in the todos array and replace it
      const index = this.todos.findIndex((t) => t.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
    },
  },
});
