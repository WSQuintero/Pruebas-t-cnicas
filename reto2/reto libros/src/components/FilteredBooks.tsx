import { BookListType } from '../types/BookListType'
import CardBook from './CardBook'

function FilteredBooks({
  filteredBooks,
  handleAddBook,
  searchedGenre
}: BookListType) {
  return (
    <>
      {filteredBooks?.length ? (
        filteredBooks?.map((book) => (
          <CardBook
            key={book.book.title}
            book={book}
            handleAddBook={handleAddBook}
          />
        ))
      ) : searchedGenre?.length ? (
        <p>No se encontraron resultados</p>
      ) : (
        false
      )}
    </>
  )
}

export default FilteredBooks
