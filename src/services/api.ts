export interface Todo {
  id: number;
  name: string;
  isComplete: boolean;
  createdAt: string;
}

const BASE_URL = 'http://localhost:5053/api/TodoItems';

export async function createTodo(newTodo: string): Promise<Todo> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: newTodo, isComplete: false }),
  };
  const response = await fetch(BASE_URL, requestOptions);
  const data = await response.json();
  return data;
}

export async function getTodos() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(BASE_URL, requestOptions);
  return await response.json();
}

export async function deleteTodo(todoId: number) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${BASE_URL}/${todoId}`, requestOptions);
  return response.ok; // Return a boolean indicating success
}
