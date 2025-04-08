import Button from './Button'


const Task = ({name, deleteTask, validateTask, completed, id}) => {
    return (
    <div className="bg-amber-50 rounded-md px-4 py-2 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <input 
          type="checkbox" 
          className="cursor-pointer"
          onChange={() => validateTask(id)}
          checked={completed}
        />
        <span className={completed ? "line-through text-gray-500" : ""}>{name}</span>
      </div>
      <Button onClick={() => deleteTask(id)}>Suppr</Button>
    </div>
    )
  }

  export default Task