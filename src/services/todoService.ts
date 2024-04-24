export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
enum HttpMethod {
  DELETE = 'DELETE',
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchTodos = async <T = Todo[]>(limit: number = 5): Promise<T> => {
  const response = await fetch(`${BASE_URL}/todos?_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return response.json() as T;
};

export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: HttpMethod.DELETE,
  });
  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }
};
