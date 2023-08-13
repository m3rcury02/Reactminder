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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-5 w-52">
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
  );
}
