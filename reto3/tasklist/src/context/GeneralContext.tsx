import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'

interface TaskListTypes {
  task: string
  completed: boolean
}

const GeneralContext = createContext<{
  setTaskList: Dispatch<SetStateAction<TaskListTypes[]>>
  taskList: TaskListTypes[]
  filteredTask: TaskListTypes[]
  setFilteredTasks: Dispatch<SetStateAction<TaskListTypes[]>>
  taskToSearch: string
  setTaskToSearch: Dispatch<SetStateAction<string>>
}>({
  setTaskList: () => null,
  taskList: [],
  filteredTask: [],
  setFilteredTasks: () => null,
  taskToSearch: '',
  setTaskToSearch: () => null
})

function ContextProvider({ children }: { children: ReactNode }) {
  const [taskList, setTaskList] = useState<TaskListTypes[]>([])
  const [filteredTask, setFilteredTasks] = useState<TaskListTypes[]>([])
  const [taskToSearch, setTaskToSearch] = useState<string>('')

  return (
    <GeneralContext.Provider
      value={{
        taskList,
        setTaskList,
        filteredTask,
        setFilteredTasks,
        taskToSearch,
        setTaskToSearch
      }}>
      {children}
    </GeneralContext.Provider>
  )
}

export { GeneralContext, ContextProvider }
