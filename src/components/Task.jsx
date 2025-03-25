import Button from './Button'


// TODO faire fonctionner la suppression
const Task = ({name}) => {
    return (
      <div className="bg-amber-50 rounded-md px-4 py-2 flex justify-between items-center">
        {name}
        <Button text="🗑️"/>
      </div>
    )
  }

  export default Task