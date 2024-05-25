import React, { useEffect, useMemo, useState } from 'react'
import { BooksService } from './services/booksService'
import './App.css'
import { DataTypes } from './types/DataTypes'
import clsx from 'clsx'
import FilteredBooks from './components/FilteredBooks'
import AvailableBooks from './components/AvailableBooks'
import ToReadBooks from './components/ToReadBooks'
import AvailableBooksText from './components/AvailableBooksText'
import SearchByGenre from './components/SearchByGenre'

function App() {
  const $Books = useMemo(() => new BooksService(), [])
  const [actualBooks, setActualBooks] = useState<DataTypes[]>([])
  const [readBooks, setReadBooks] = useState<DataTypes[]>([])
  const [searchedGenre, setSearchedGenre] = useState<string>('')
  const [filteredBooks, setFilteredBooks] = useState<DataTypes[]>([])
  const readBook = JSON.parse(String(localStorage.getItem('readBooks'))) || []

  const getBooks = async () => {
    const { data, status } = await $Books.getAllBooks()

    if (status) {
      setActualBooks(data.library)
    }
  }
  const getLocalStorageBooks = () => {
    setActualBooks([])
    const localStorageBooks =
      JSON.parse(String(localStorage.getItem('availableBook'))) || []

    if (readBooks?.length || localStorageBooks.length) {
      setActualBooks(localStorageBooks)
    }
  }
  const handleSearchByGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchedGenre(value)

    const filterBooks = actualBooks.filter((book) =>
      book.book.genre.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )

    setFilteredBooks(filterBooks)
  }
  const handleAddBook = (book: DataTypes) => {
    const filteredBooks = actualBooks?.filter(
      (aBook) => aBook.book.title !== book.book.title
    )

    const bookAlredyExist = readBooks?.some(
      (actBook) => actBook.book.title === book.book.title
    )

    if (!bookAlredyExist) {
      if (readBooks?.length) {
        setReadBooks((prev) => [...prev, book])
        localStorage.setItem('readBooks', JSON.stringify([...readBooks, book]))
      } else {
        setReadBooks([book])
        localStorage.setItem('readBooks', JSON.stringify([book]))
        setActualBooks(filteredBooks)
      }
      setSearchedGenre('')
      setFilteredBooks([])
      setActualBooks(filteredBooks)
      localStorage.setItem('availableBook', JSON.stringify(filteredBooks))
    }
  }
  const handleDeleteBook = (book: DataTypes) => {
    const bookExist = readBooks.filter(
      (actBook) => actBook.book.title !== book.book.title
    )
    setReadBooks(bookExist)
    localStorage.setItem('readBooks', JSON.stringify(bookExist))
    localStorage.setItem(
      'availableBook',
      JSON.stringify([...actualBooks, book])
    )
    setActualBooks((prev) => [...prev, book])
  }
  const getExistInformation = () => {
    setReadBooks(readBook)
    getLocalStorageBooks()
  }
  const handleStorageChange = () => {
    getExistInformation()
  }

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange)

    if (!readBook.length) {
      getBooks()
    } else {
      getExistInformation()
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <>
      <AvailableBooksText
        readBooks={readBooks}
        searchedGenre={searchedGenre}
        filteredBooks={filteredBooks}
        actualBooks={actualBooks}
      />

      <div className='flex p-0 sm:flex-row flex-col'>
        <section
          className={clsx(
            `flex gap-3 flex-wrap justify-center border boder-gray-500 w-full`,
            readBooks?.length ? 'sm:w-3/4' : 'sm:w-full'
          )}>
          <SearchByGenre
            searchedGenre={searchedGenre}
            handleSearchByGenre={handleSearchByGenre}
          />
          <FilteredBooks
            filteredBooks={filteredBooks}
            handleAddBook={handleAddBook}
            searchedGenre={searchedGenre}
          />
          <AvailableBooks
            searchedGenre={searchedGenre}
            filteredBooks={filteredBooks}
            handleAddBook={handleAddBook}
            actualBooks={actualBooks}
          />
        </section>
        <ToReadBooks
          readBooks={readBooks}
          handleDeleteBook={handleDeleteBook}
        />
      </div>
    </>
  )
}

export default App
