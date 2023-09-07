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
  console.log(response);
  return response.json();
}

export async function deleteTodo(todoId: number) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${BASE_URL}/${todoId}`, requestOptions);
  return response.ok;
}

export async function updateTodo(todo: Todo): Promise<Todo> {
  const { id, isComplete, name } = todo;
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, isComplete: isComplete }),
  };
  const response = await fetch(`${BASE_URL}/${id}`, requestOptions);
  const data = await response.json();
  return data;
}
