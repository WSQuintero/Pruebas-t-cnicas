import { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext'
import TaskItems from './TaskItems'

interface Task {
  task: string
  completed: boolean
}

interface Props {
  element: 'tasks' | 'filteredTasks'
}

function HasTasks({ element }: Props) {
  const { taskList, filteredTask, taskToSearch } = useContext(GeneralContext)

  return (
    <>
      {(element === 'tasks' && !taskList) ||
        (!taskList.length && !taskToSearch && (
          <p className='text-center mt-40 font-bold text-green-900'>
            Sin tareas para mostrar
          </p>
        ))}

      {element === 'tasks' &&
        (taskList || [...taskList].length) &&
        !taskToSearch &&
        taskList.map((task: Task, index: number) => (
          <TaskItems key={index} task={task.task} completed={task.completed} />
        ))}

      {element === 'filteredTasks' &&
        (!filteredTask || (!filteredTask.length && taskToSearch)) && (
          <p className='text-center mt-40 font-bold text-green-900'>
            Sin tareas filtradas para mostrar
          </p>
        )}

      {element === 'tasks' &&
        (filteredTask || [...filteredTask].length) &&
        taskToSearch &&
        filteredTask.map((task: Task, index: number) => (
          <TaskItems key={index} task={task.task} completed={task.completed} />
        ))}
    </>
  )
}

export default HasTasks
