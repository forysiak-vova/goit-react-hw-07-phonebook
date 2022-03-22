import ContactItem from '../ContactItem';
import { List } from './ContactList.styles';
import PropTypes from 'prop-types';

function ContactList({contacts, ondeleteContact}) {

  
   return (
      <List>
            {contacts.map(({ id, name, number }) =>
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
                  func={ondeleteContact}   
            />
           )}
      </List>
   )
}
ContactList.propTypes = {
   contacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,

      })
   ),
   ondeleteContact: PropTypes.func
}

export default ContactList;

