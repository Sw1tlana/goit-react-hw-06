import css from './SearchBox.module.css';

const SearchBox = ({ searchText, handleSearch }) => {
  return (
    <div className={css.searchContainer}>
     <label className={css.labelSearch}>
      <span className={css.labelTextSearch}>Find contacts by name</span>
      <input className={css.inputSearch} 
      type="text" 
      name="text" 
      value={searchText}
      onChange={(evt) => handleSearch(evt.target.value)}/>
      </label>
    </div>
  )
}

export default SearchBox