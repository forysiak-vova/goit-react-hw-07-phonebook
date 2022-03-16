import ContactItem from '../ContactItem'
import { useSelector, useDispatch } from 'react-redux'
import { List } from './ContactList.styles'
import deleteCont from '../../redux/contacts/contact-action';
import {getVisibleContacts} from './contactList-selectors'

function ContactList() {
   const contacts = useSelector(getVisibleContacts)
   const dispatch = useDispatch();
  
   return (
      <List>
            {contacts.map(({ id, name, number }) =>
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               onDeleteContact={ id => dispatch(deleteCont.deleteContact(id))}
               
            />
           )}
      </List>
   )
}
export default ContactList;