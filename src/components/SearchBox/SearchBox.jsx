import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

function SearchBox() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setSearchText(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchContainer}>
     <label className={css.labelSearch}>
      <span className={css.labelTextSearch}>Find contacts by name</span>
      <input className={css.inputSearch} 
      type="text" 
      name="text" 
      value={searchText}
      onChange={handleChange}/>
      </label>
    </div>
  )
}

export default SearchBox;