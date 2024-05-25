import { DataTypes } from './DataTypes'

export type BookListType = {
  filteredBooks?: DataTypes[]
  handleAddBook: (book: DataTypes) => void
  searchedGenre?: string
  actualBooks?: DataTypes[]
}

export type ToReadBookTypes = {
  readBooks: DataTypes[]
  handleDeleteBook: (book: DataTypes) => void
}

export type AvailableBooksTypes={
  readBooks: DataTypes[]
  searchedGenre?: string
  filteredBooks?: DataTypes[]
  actualBooks?: DataTypes[]
}

export type SerchByGenreTypes={
  searchedGenre?: string,
  handleSearchByGenre:((string)=>void)
}