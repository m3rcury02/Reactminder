import { useState } from "react";

export default function App() {
  useState("")
  return (
    <div className="m-5">
      <form className="flex flex-col gap-2 mb-5">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="item">New Item</label>
          <input
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
        <li className="mt-2">
          <label>
            <input type="checkbox" className="mr-2" />
            Item 1
          </label>
          <button className="ms-2 bg-opacity-25 bg-red-600 border-2 border-red-500 rounded-md p-1 px-2">
            Delete
          </button>
        </li>
        <li className="mt-2">
          <label>
            <input type="checkbox" className="mr-2" />
            Item 2
          </label>
          <button className="ms-2 bg-opacity-25 bg-red-600 border-2 border-red-500 rounded-md p-1 px-2">
            Delete
          </button>
        </li>
        <li className="mt-2">
          <label>
            <input type="checkbox" className="mr-2" />
            Item 3
          </label>
          <button className="ms-2 bg-opacity-25 bg-red-600 border-2 border-red-500 rounded-md p-1 px-2">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
