import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
        <div>
      <ul className={css.contactsList}>
        { contacts.map(contact => (
        <Contact 
        key={contact.id} 
        name={contact.name} 
        number={contact.number} 
        id={contact.id}
        onDelete={onDeleteContact}/>
        ))} 
      </ul>

    </div>
    </div>
  )
}

export default ContactList
