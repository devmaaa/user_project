import { useState, useEffect,useId } from "react";
import {
  HomePageContainer,
  ContentBlock,
  Title,
  Input,
  Button,
} from "../styles/Home.styles";
import { deleteTodo, fetchTodos, Todo } from "../services/todoService";
import ErrorBoundary from "../hoc/ErrorBoundary";
const LOCAL_STORAGE_TODOS = "todos";
const TODOS_LIMIT = 5;
const HomePage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const generateId = useId();

  useEffect(() => {
    const localTodos = localStorage.getItem(LOCAL_STORAGE_TODOS);
    const parsedTodos = localTodos ? JSON.parse(localTodos) : [];
    const hasTodos = Array.isArray(parsedTodos) && parsedTodos.length > 0;
    if (hasTodos) {
      setTodos(parsedTodos);
    } else {
      fetchAndSetTodos();
    }
  }, []);

  const fetchAndSetTodos = async () => {
    try {
      const fetchedTodos = await fetchTodos(TODOS_LIMIT); 
      setTodos(fetchedTodos);
      localStorage.setItem(LOCAL_STORAGE_TODOS, JSON.stringify(fetchedTodos));
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  const handleAddTodo = async (inputValue: string) => {
    if (!inputValue.trim()) return;
    try {
      const newTodo = {
        id: `${generateId}-${Date.now()}`,
        title: inputValue,
        completed: false, 
      };

      const newTodos = [newTodo, ...todos];
      setTodos(newTodos);
      localStorage.setItem(LOCAL_STORAGE_TODOS, JSON.stringify(newTodos));
      setInputValue("");
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
      if (filteredTodos.length === 0) {
        fetchAndSetTodos(); 
      } else {
        localStorage.setItem(LOCAL_STORAGE_TODOS, JSON.stringify(filteredTodos));
      }
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <ErrorBoundary>
      <HomePageContainer>
        <Title>Todos List</Title>
        <div>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add new todo"
          />
          <Button onClick={() => handleAddTodo(inputValue)}>Add Todo</Button>
        </div>
        {todos.map((todo) => (
          <ContentBlock key={todo.id.toString()}>
            <span>{todo.title}</span>
            <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
          </ContentBlock>
        ))}
      </HomePageContainer>
    </ErrorBoundary>
  );
};

export default HomePage;
