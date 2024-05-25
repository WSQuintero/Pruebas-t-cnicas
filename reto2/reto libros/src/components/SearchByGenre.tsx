import { SerchByGenreTypes } from '../types/BookListType'

function SearchByGenre({
  searchedGenre,
  handleSearchByGenre
}: SerchByGenreTypes) {
  return (
    <div className='w-full flex justify-end p-3'>
      <input
        type='text'
        placeholder='Buscar por género'
        value={searchedGenre}
        onChange={(event) => handleSearchByGenre(event)}
        className='border border-gray-500 p-4'
      />
    </div>
  )
}

export default SearchByGenre
