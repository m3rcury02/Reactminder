import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="ml-3 text-xl">
      {todos.length === 0 && "No todos! Add a todo above!"}
      {todos.map((todo) => {
        return (
          <ToDoItem
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
