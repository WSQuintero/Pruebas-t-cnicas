import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState
} from 'react'
import { TasksService } from '../services/Tasks.service'

interface TaskListTypes {
  task: string
  completed: boolean
}

interface ContextTypes {
  setTaskList: Dispatch<SetStateAction<TaskListTypes[]>>
  taskList: TaskListTypes[]
  filteredTask: TaskListTypes[]
  setFilteredTasks: Dispatch<SetStateAction<TaskListTypes[]>>
  taskToSearch: string
  setTaskToSearch: Dispatch<SetStateAction<string>>
  $Tasks: TasksService
}

const GeneralContext = createContext<ContextTypes>({
  setTaskList: () => null,
  taskList: [],
  filteredTask: [],
  setFilteredTasks: () => null,
  taskToSearch: '',
  setTaskToSearch: () => null,
  $Tasks: new TasksService()
})

function ContextProvider({ children }: { children: ReactNode }) {
  const [taskList, setTaskList] = useState<TaskListTypes[]>([])
  const [filteredTask, setFilteredTasks] = useState<TaskListTypes[]>([])
  const [taskToSearch, setTaskToSearch] = useState<string>('')
  const $Tasks = useMemo(() => new TasksService(), [])

  return (
    <GeneralContext.Provider
      value={{
        taskList,
        setTaskList,
        filteredTask,
        setFilteredTasks,
        taskToSearch,
        setTaskToSearch,
        $Tasks
      }}>
      {children}
    </GeneralContext.Provider>
  )
}

export { GeneralContext, ContextProvider }
