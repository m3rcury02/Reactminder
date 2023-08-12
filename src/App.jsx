import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("")
  }

  return (
    <div className="m-5 w-52">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-5">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            className="rounded-sm bg-blue-500 text-white p-1"
          />
        </div>
        <button className="bg-opacity-25 bg-blue-500 rounded-2xl border-2 border-blue-500 p-1">
          Add
        </button>
      </form>
      <h1 className=" text-2xl">Todo List</h1>
      <ul className="ml-3 text-lg">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="mt-2">
              <label>
                <input type="checkbox" className="mr-2" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="ms-2 bg-opacity-25 bg-red-600 border-2 border-red-500 rounded-md p-1 px-2">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
