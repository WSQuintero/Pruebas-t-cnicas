import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext'

function TaskSearch() {
  const { taskList, setFilteredTasks, taskToSearch, setTaskToSearch } =
    useContext(GeneralContext)

  const handleSearchTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const taskText = event.target.value
    setTaskToSearch(taskText)
    const filteredTasks = taskList.filter((task) =>
      task.task.includes(taskText)
    )
    setFilteredTasks(filteredTasks)
  }

  return (
    <div className='w-full flex justify-around items-center h-[50px] p-8 border border-green-300 my-5'>
      <label
        htmlFor='search'
        className='w-[50%] h-full flex justify-center items-center'>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Buscar tarea'
          value={taskToSearch}
          onChange={handleSearchTask}
          className='w-full border border-gray-500 p-2'
        />
      </label>
    </div>
  )
}

export default TaskSearch
