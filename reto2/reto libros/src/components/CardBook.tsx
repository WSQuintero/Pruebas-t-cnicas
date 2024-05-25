import { DataTypes } from '../types/DataTypes'

function CardBook({
  book,
  handleAddBook
}: {
  book: DataTypes
  handleAddBook: (book: DataTypes) => void
}) {
  return (
    <article className=''>
      <img
        src={book.book.cover}
        width={300}
        height={400}
        className='w-[300px] h-[400px]'
      />
      <p>{book.book.genre}</p>
      <button
        className='border border-gray-400 p-4 w-full'
        onClick={() => handleAddBook(book)}>
        Agregar a lista de lectura
      </button>
    </article>
  )
}

export default CardBook
