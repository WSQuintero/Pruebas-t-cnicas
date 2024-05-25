import { useContext, useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { GeneralContext } from '../context/GeneralContext'

function TaskForm() {
  const [actualTask, setActualTask] = useState<string>('')
  const { taskList, setTaskList, setFilteredTasks } = useContext(GeneralContext)

  const handleAddTask = () => {
    setFilteredTasks([])
    if (
      taskList.some((task) => task.task.includes(actualTask)) ||
      !actualTask
    ) {
      return
    }

    if (taskList) {
      localStorage.setItem(
        'taskList',
        JSON.stringify([...taskList, { task: actualTask, completed: false }])
      )
      setTaskList((prev) => [...prev, { task: actualTask, completed: false }])
      setActualTask('')
    } else {
      localStorage.setItem(
        'taskList',
        JSON.stringify([{ task: actualTask, completed: false }])
      )
      setTaskList([{ task: actualTask, completed: false }])
      setActualTask('')
    }
  }

  return (
    <div className='w-full flex justify-around items-center h-[50px] p-8 border border-green-300 my-5'>
      <label
        htmlFor='add'
        className='w-[50%] h-full flex justify-center items-center'>
        <input
          type='text'
          id='add'
          name='add'
          placeholder='Agregar nueva tarea'
          value={actualTask}
          onChange={(event) => setActualTask(event.target.value)}
          className='w-full border border-gray-500 p-2'
        />
      </label>
      <button className='cursor-pointer' onClick={handleAddTask}>
        <IoMdAddCircleOutline size='30px' color='green' />
      </button>
    </div>
  )
}

export default TaskForm
