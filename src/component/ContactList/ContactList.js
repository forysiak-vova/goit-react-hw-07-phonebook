import ContactItem from '../ContactItem'
import { useSelector, useDispatch } from 'react-redux'
import { List } from './ContactList.styles'
import deleteOperation from '../../redux/contacts/contacts-operations';
import {getVisibleContacts} from './contactList-selectors'

function ContactList() {
   const contacts = useSelector(getVisibleContacts)
   const dispatch = useDispatch();
  
   return (
      <List>
            {contacts.map(({ id, name, phone }) =>
            <ContactItem
               key={id}
               id={id}
               name={name}
               phone={phone}
               onDeleteContact={ id => dispatch(deleteOperation.deleteContact(id))}
               
            />
           )}
      </List>
   )
}
export default ContactList;