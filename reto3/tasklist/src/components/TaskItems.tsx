import { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { GeneralContext } from '../context/GeneralContext'
import { FaGrinTongueWink } from 'react-icons/fa'
import { FaGrinWink } from 'react-icons/fa'

import clsx from 'clsx'

function TaskItems({ task, completed }: { task: string; completed: boolean }) {
  const { taskList, setTaskList, setFilteredTasks } = useContext(GeneralContext)

  const handleDeleteTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setFilteredTasks([])
    const filterTasks = taskList.filter(
      (taskInList) => taskInList.task !== task
    )
    localStorage.setItem('taskList', JSON.stringify(filterTasks))
    setTaskList(filterTasks)
  }
  const handleCompleteTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setFilteredTasks([])
    const actualTask = taskList.findIndex(
      (taskInList) => taskInList.task === task
    )
    const finalTasks = [...taskList]
    finalTasks.splice(actualTask, 1, {
      task,
      completed: !completed
    })
    localStorage.setItem('taskList', JSON.stringify(finalTasks))
    setTaskList(finalTasks)
  }

  return (
    <div
      className={clsx(
        'w-full flex justify-between p-3 border border-green-300 shrink-0 text-green-800 font-semibold',
        completed && 'font-bold bg-green-200 line-through	'
      )}>
      {task}
      <span className='flex gap-5 '>
        <button className='cursor-pointer' onClick={handleDeleteTask}>
          <AiFillDelete color='gray' />
        </button>
        <button className='cursor-pointer' onClick={handleCompleteTask}>
          {completed ? (
            <FaGrinTongueWink color='green' />
          ) : (
            <FaGrinWink color='gray' />
          )}
        </button>
      </span>
    </div>
  )
}

export default TaskItems
