import PropTypes from 'prop-types';
import {ContactName,Item,Button} from './ContactItem.styles'

function ContactItem({id, name, phone, onDeleteContact}) { 
   return (
      <Item>
               <ContactName> {name}</ContactName>
         <p>( {phone} )</p>
              <Button onClick={()=>onDeleteContact(id)}>delete</Button>
      </Item>
)
}
ContactItem.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   phone: PropTypes.string.isRequired,
   onDeleteContact: PropTypes.func.isRequired


   
}
export default ContactItem;