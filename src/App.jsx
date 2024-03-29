import "modern-normalize";
import css from './App.module.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox'; 

function App() {
  return (
    <div>
      <div className={css.formWrapper}>
        <h1 className={css.heroFormTitle}>Phonebook</h1>
        <ContactForm />
        <SearchBox /> 
        <ContactList />
      </div>
    </div>
  )
}

export default App;