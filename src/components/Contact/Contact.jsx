import css from './Contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  }
  return (
    <div>
         <div>
      <li className={css.contactItem}>
        <div className={css.containerContactItem}>
          <div className={css.containerInfo}>
            <p><FaUser /><span className={css.contactInfo}>{name}</span></p>
            <p><FaPhoneAlt /><span className={css.contactInfo}>{number}</span></p>
          </div>
        <button className={css.contactDeleteBtn} type="button" onClick={handleDelete}>Delete</button>
        </div>
      </li>

    </div>
    </div>
  )
}

export default Contact