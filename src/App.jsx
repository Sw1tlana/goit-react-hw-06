import "modern-normalize";
import css from './App.module.css';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";
import { addContacts, deleteContacts } from "./redux/contactsSlice";
import { useEffect } from "react";

const initialContactsData = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() { 
const contacts = useSelector((state) => state.contacts.items);
const nameFilter = useSelector(selectNameFilter);
const dispatch = useDispatch();

useEffect(() => {
initialContactsData.forEach(contact => dispatch(addContacts(contact)));
}, [dispatch]);

const handleAddContact = (newContact) => {
  dispatch(addContacts({ ...newContact, id: nanoid() }));
};

const handleSearch = (text) => {
 dispatch(changeFilter(text));
};

const handleDeleteContact = (contactId) => {
  dispatch(deleteContacts(contactId));
};

const filteredContacts = contacts.filter((contact) => contact.name &&
contact.name.toLowerCase().includes(nameFilter.toLowerCase())
);

  return (
    <div>
    <div className={css.formWrapper}>
    <h1 className={css.heroFormTitle}>Phonebook</h1>
    <ContactForm handleAddContact={handleAddContact}/>
    <SearchBox searchText={nameFilter} 
    handleSearch={handleSearch}/>
    <ContactList contacts={filteredContacts} 
    onDeleteContact={handleDeleteContact}/> 
    </div>
    </div>
  )
}

export default App
