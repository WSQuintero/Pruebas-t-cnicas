import { BookListType } from '../types/BookListType'
import CardBook from './CardBook'

function AvailableBooks({
  searchedGenre,
  filteredBooks,
  handleAddBook,
  actualBooks
}: BookListType) {
  return (
    <>
      {!searchedGenre?.length && !filteredBooks?.length
        ? actualBooks?.map((book) => (
            <CardBook
              key={book.book.title}
              book={book}
              handleAddBook={handleAddBook}
            />
          ))
        : false}
    </>
  )
}

export default AvailableBooks
