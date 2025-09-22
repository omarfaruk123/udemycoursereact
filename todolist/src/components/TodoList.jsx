import { useState } from 'react'


function TodoList() {
  const [task, setTask] = useState('')
  const [allTask, setAllTask] = useState([])

   const AddTask = () => {
      if(task.trim() === "") return
      setAllTask([...allTask, {id: Date.now(), text: task}])
      setTask('')
    
    }

const deleteTask = (id) => {
    // const existingTask = allTask.filter((task) => task.id !== id) 
    // setAllTask(existingTask)
    setAllTask(allTask.filter((task) => task.id !== id))
}
  return (
    <>
      <div className='max-w-lg p-4 flex justify-between mx-auto'>
        <input className='border border-blue' type='text' value={task} placeholder='write new task' onChange={(e) => setTask(e.target.value)} />
        <button className='bg-blue-400 text-white rounded-lg p-2' onClick={AddTask}>Add Task</button>
      </div>

      <div className='bg-white'>
        {
            allTask.length > 0 ? <ul className='max-w-lg space-y-2 mx-auto'>
            {
            allTask.map((item,index)=>
                <li className='flex rounded-lg shadow-sm justify-between items-center p-2 mx-auto mb-4' key={index}> 
                    <span>{item.text}</span> 
                    <button onClick={()=> deleteTask(item.id)} className='bg-red-500 rounded px-2 py-1'> Delete </button>
                </li>
                
                )
            }
             </ul> : <p> No task here</p>
        }
      </div>

    </>
  )
}

export default TodoList
