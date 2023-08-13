export function ToDoItem({todo,toggleTodo,deleteTodo}) {
  return (
    <li key={todo.id} className="mt-2">
      <label>
        <input
          type="checkbox"
          className="mr-2"
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ms-4 text-sm bg-opacity-25 bg-red-600 border-2 border-red-500 rounded-md p-1 px-2"
      >
        Delete
      </button>
    </li>
  );
}
