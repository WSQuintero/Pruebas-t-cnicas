import { useContext, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { GeneralContext } from './context/GeneralContext'
import TaskSearch from './components/TaskSearch'

function App() {
  const { setTaskList } = useContext(GeneralContext)

  useEffect(() => {
    const lsTasks = JSON.parse(String(localStorage.getItem('taskList')))
    setTaskList(lsTasks)
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
