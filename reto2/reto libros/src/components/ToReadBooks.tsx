import { ToReadBookTypes } from '../types/BookListType'

function ToReadBooks({ readBooks, handleDeleteBook }: ToReadBookTypes) {
  return (
    <>
      {readBooks?.length ? (
        <aside className=' sm:mt-0 mt-5 w-full sm:w-1/4 h-full sm:h-screen sm:fixed right-0  top-0 p-2'>
          <h3 className='text-center font-bold text-3xl p-3'>
            Lista de lectura
          </h3>
          <div className=' grid grid-cols-1 sm:grid-cols-2 justify-start items-center sm:items-start overflow-auto h-[90%]'>
            {readBooks?.map((book) => (
              <article
                key={book.book.title}
                className='sm:w-[150px] p-0 w-full flex flex-col justify-center items-center  h-[550px] sm:h-[270px] shrink-0 overflow-hidden mt-2'>
                <img
                  src={book.book.cover}
                  width={150}
                  className='sm:w-[150px] sm:h-[200px] w-[90%] h-[500px]'
                />
                <button
                  className='border border-gray-400  w-full block h-[60px]'
                  onClick={() => handleDeleteBook(book)}>
                  Eliminar
                </button>
              </article>
            ))}
          </div>
        </aside>
      ) : (
        false
      )}
    </>
  )
}

export default ToReadBooks
