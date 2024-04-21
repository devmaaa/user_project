export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchTodos = async (limit: number = 5): Promise<Todo[]> => {
  const response = await fetch(`${BASE_URL}/todos?_limit=${limit}`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

export const addTodo = async (title: string): Promise<Todo> => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, completed: false }),
  });
  if (!response.ok) {
    throw new Error("Failed to add todo");
  }
  return response.json();
};

export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};
