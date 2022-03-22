import ContactItem from '../ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { List } from './ContactList.styles';
// import { getVisibleContacts } from './contactList-selectors'
// import { contactsOperations } from 'redux/contacts';
// import { useDeleteContactMutation } from '../../redux/contacts/contacts-operations';

function ContactList({contacts, ondeleteContact}) {
   // const contacts = useSelector(getVisibleContacts)
   // const dispatch = useDispatch();
   // const [deleteContact] = useDeleteContactMutation()
  
   return (
      <List>
            {contacts.map(({ id, name, number }) =>
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
                  // onDeleteContact={id => dispatch(contactsOperations.deleteContact(id))}
                  func={ondeleteContact}
                  
               
            />
           )}
      </List>
   )
}
export default ContactList;