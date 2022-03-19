import React, { useState, useEffect } from "react";
import { Label, Input, Button } from './Form.styles'
import { useSelector, useDispatch } from 'react-redux'
import {contactsOperations, contactsSelectors} from 'redux/contacts'


const Form = () => {
   const contact = useSelector(contactsSelectors.getContact)
   const dispatch = useDispatch();
   
   const [name, setName] = useState('')
   const [number, setNumber] = useState('')

    const handelChange = e => {
       const { name, value } = e.currentTarget;
      
        switch (name) {
           case 'name':
              setName(value);
              break;
           case 'number':
              setNumber(value);
              break;
           default:
              return;
 }
   };

   useEffect(() => {
    dispatch(contactsOperations.fetchContact())
   },[dispatch])

   
  const handelSubmit = e => {
     e.preventDefault();

         const ReturnName = contact.find(contact => contact.name === name);

    if (ReturnName) {
      alert('This name is already in the phone book ');
    } else {
   
     dispatch(contactsOperations.addContact({ name, number }));
    }
     setName('')
     setNumber('')
   };
      return (
         <form onSubmit={handelSubmit}>
            <Label>
               <h4> Name</h4>
           
            <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
           value={name}
           onChange={handelChange}
        />
         </Label>
            <Label>
               <h4>Phone</h4>
             
           <Input
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
             value={number}
             onChange={handelChange}
           />
         </Label>
         <Button type='submit'>Add contact</Button>
      </form>
      )
   
}

export default Form;