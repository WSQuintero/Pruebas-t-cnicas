import { ChangeEvent } from 'react'

function EditTaskModal({
  openEdit,
  editTask,
  handleCloseModal,
  handleUpdateEditInput,
  handleEditTask
}: {
  openEdit: boolean
  editTask: string
  handleCloseModal: () => void
  handleUpdateEditInput: (event: ChangeEvent<HTMLInputElement>) => void
  handleEditTask: (event: React.MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <>
      {' '}
      {openEdit && (
        <div className='w-full h-full fixed bg-black/50 top-0 left-0 flex justify-center items-center'>
          <article className='w-[50%] h-[70vh] bg-white flex flex-col justify-center items-center gap-2 relative rounded-2xl'>
            <button
              className='absolute top-3 right-3 p-3 border border-gray-300 rounded-2xl'
              onClick={handleCloseModal}>
              X
            </button>
            <label htmlFor='edit' className='font-bold'>
              Modificar tarea
            </label>
            <input
              type='text'
              className='w-[50%] ml-4 p-3 border border-gray-500'
              id='edit'
              name='edit'
              value={editTask}
              onChange={handleUpdateEditInput}
            />
            <button
              className='w-[200px] h-[30px] border border-gray-300'
              onClick={handleEditTask}>
              Editar
            </button>
          </article>
        </div>
      )}
    </>
  )
}

export default EditTaskModal
