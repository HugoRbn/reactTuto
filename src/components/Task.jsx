import Button from './Button'


const Task = ({name, deleteTask, id}) => {
    return (
      <div className="bg-amber-50 rounded-md px-4 py-2 flex justify-between items-center">
        {name}
        <Button onClick={() => deleteTask(id)}>Suppr</Button>
      </div>
    )
  }

  export default Task