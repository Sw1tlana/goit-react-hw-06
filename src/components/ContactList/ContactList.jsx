import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

  const getVisibleContacts = (contacts, statusFilter) => {
    if (statusFilter && statusFilter.trim() !== "") {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(statusFilter.toLowerCase())
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
        {visibleContacts.map(contact => (
          <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name} 
          number={contact.number}
      />
        ))} 
      </ul>

    </div>
  )
}

export default ContactList;