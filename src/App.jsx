import { useState } from "react";
import Task from "./components/Task";

export default function App() {
  const [todos, setTodos] = useState([])

  const removeTask = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const onSubmit = (formData) => {
    const todo = {
      id: new Date(),
      name: formData.get("todo")
    }
    
    if(todo) {
      setTodos([...todos, todo])
    }
  }

  return (
    <div className="p-10 flex flex-col gap-4">
      <form action={onSubmit} className="flex items-center gap-2 justify-center">
        <input name="todo" className="border rounded-md px-4 py-3 flex-1" type="text" />
        <button type="submit" className="border rounded-md px-2 py-3 w-32 cursor-pointer bg-zinc-800 text-white">Add</button>
      </form>
      <ul>
      {
        todos.map((t) => (
          <li className="w-full" key={t.id}><Task deleteTask={removeTask} name={t.name} id={t.id}/></li>
        ))
      }
      </ul>
    </div >
  )
}


