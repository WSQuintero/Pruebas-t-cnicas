import { AvailableBooksTypes } from '../types/BookListType'

function AvailableBooksText({
  readBooks,
  searchedGenre,
  filteredBooks,
  actualBooks
}: AvailableBooksTypes) {
  return (
    <>
      <h2 className='text-blue-700 text-xl font-bold p-2'>
        {readBooks?.length
          ? 'Con libros en la lista de lectura'
          : 'Sin libros en la lista de lectura'}
      </h2>
      <h3 className='text-gray-700 text-3xl font-bold p-5'>
        {!searchedGenre?.length && actualBooks?.length}
        {searchedGenre?.length ? filteredBooks?.length : false} Libros
        disponibles
      </h3>
    </>
  )
}

export default AvailableBooksText
