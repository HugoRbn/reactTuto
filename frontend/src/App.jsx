import {useEffect, useState} from "react";
import Task from "./components/Task";
import {addTask, deleteTask, getTasks, updateTask} from "./services/taskService"

export default function App() {
  const [todos, setTodos] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTodos([...tasks]);
  }

  const removeTask = (id) => {
    deleteTask(id)
    setTodos(todos.filter((t) => t._id !== id))
  }

  const validateTask = async (id) => {
    const result = todos.find((result) => result._id === id)
    result.completed === true ? result.completed = false : result.completed = true
    updateTask(result)
    setCompletedTasks([...completedTasks, result])
  }
  
  const onSubmit = async (formData) => {
    try {
      const todo = {
        name: formData.get("todo"),
        completed: false
      }

      const savedTask = await addTask(todo)
      console.log(savedTask)
      if(savedTask) {
        setTodos([...todos, savedTask])
      }
    } catch (error) {
      console.log("error when adding task", error)
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
          <li className="w-full" key={t._id}><Task deleteTask={removeTask} validateTask={validateTask} name={t.name} completed={t.completed} id={t._id}/></li>
        ))
      }
      </ul>
    </div >
  )
}


