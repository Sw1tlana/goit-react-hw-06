// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

// const initialContactsData = [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ]

function App() {
//   const [contacts, setContacts] = useState(() => {
//     const storedContacts = JSON.parse(localStorage.getItem('contacts'));
//     return storedContacts || initialContactsData;
//  });
//  const [searchText, setSearchText] = useState("");
//  const [filteredContacts, setFilteredContacts] = useState([]);

//  const handleAddContact = (newContact) => {
//     setContacts([...contacts, {...newContact, id: nanoid()}])
//     };
 
//   const handleSearch = (text) => {
//     setSearchText(text);
//   };

//   const handleDeleteContact = (contactId) => {
//     const updateContacts = contacts.filter(contact => contact.id !== contactId);
//     setContacts(updateContacts);
//   };

//   useEffect(() => {
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredContacts(filteredContacts);
//   }, [searchText, contacts]);

//  useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts))
//  }, [contacts]);

  return (
    <div className={css.formWrapper}>
    <h1 className={css.heroFormTitle}>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />  
    </div>
  )
}

export default App