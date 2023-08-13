import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem == "") return;
    onSubmit(newItem);
    setNewItem("");
  }     

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="item" className="mb-1">New Item</label>
        <div className="flex flex-row gap-1">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            className="rounded-md bg-blue-500 text-white p-1 mr-2"
          />
          <button className="bg-opacity-25 bg-blue-500 rounded-2xl border-2 border-blue-500 p-2 px-4">
            Add
          </button>
        </div>
      </div>
    </form>
  );
  
}
