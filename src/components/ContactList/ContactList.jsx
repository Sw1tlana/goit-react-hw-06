import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectNameFilter, selectContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

const getVisibleContacts = (contacts, statusFilter) => {
  if (statusFilter && statusFilter.trim() !== "") {
    return contacts.filter((contact) =>
      contact.username.toLowerCase().includes(statusFilter.toLowerCase())
    );
  }
  return contacts;
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const statusFilter = useSelector(selectNameFilter) ?? "";
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (

    <div>
      <ul className={css.contactsList}>
        { visibleContacts.map(contact => (
        <Contact 
        key={contact.id} 
        name={contact.name} 
        number={contact.number} 
        id={contact.id}
        onDelete={getVisibleContacts}/>
        ))} 
      </ul>
    </div>
  )
}

export default ContactList
