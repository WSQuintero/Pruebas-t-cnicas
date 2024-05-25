import HasTasks from './HasTasks'

function TaskList() {
  return (
    <div className='flex flex-col gap-3 p-3 shrink-0 w-full'>
      <HasTasks element={'filteredTasks'} />
      <HasTasks element={'tasks'} />
    </div>
  )
}

export default TaskList
