import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { ToDoList } from "./ToDoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localvalue = localStorage.getItem("ITEMS");
    if (localvalue == null) return [];
    return JSON.parse(localvalue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = completed;
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="m-5 ">
      <NewTodoForm onSubmit={addTodo} />
      <h1 className=" text-2xl font-bold dark:text-white">Todo List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
