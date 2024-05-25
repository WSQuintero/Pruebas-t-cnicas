import { useContext, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { GeneralContext } from './context/GeneralContext'
import TaskSearch from './components/TaskSearch'
import { DataTasks } from './services/Tasks.service'

function App() {
  const { setTaskList, $Tasks } = useContext(GeneralContext)

  const getTasks = async () => {
    const lsTasks = JSON.parse(String(localStorage.getItem('taskList'))) || []
    const { status, data } = await $Tasks.getTasks()

    if (status) {
      const finalData = ((await data) as DataTasks[])
        .map((task) => ({ task: task.title, ...task }))
        .slice(0, 5)
      if (
        !lsTasks.some((task: { task: string; completed: boolean }) =>
          finalData.some((tas) => tas.task.includes(task.task))
        )
      ) {
        setTaskList([...lsTasks, ...finalData])
      } else {
        setTaskList([...lsTasks])
      }
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className='w-full flex justify-center items-center flex-col p-5'>
      <h1 className='font-bold text-2xl'>To-do list aplication</h1>
      <section className='max-w-[800px] min-w-[300px] w-full'>
        <TaskSearch />
        <TaskForm />
      </section>
      <section className='max-w-[800px] min-w-[300px] w-full h-[400px] overflow-auto border border-green-500 flex flex-col  items-center'>
        <TaskList />
      </section>
    </div>
  )
}

export default App
