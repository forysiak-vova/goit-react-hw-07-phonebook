import React, { useState, useEffect } from "react";
import { Label, Input, Button, Add, Spinner } from './Form.styles'
import { useSelector, useDispatch } from 'react-redux'
import { contactsOperations, contactsSelectors } from 'redux/contacts'
import Loader from 'react-js-loader'
import { getLoading } from '../../redux/contacts/contact-selectors';
import { useFetchContactsQuery } from '../../redux/contacts/contacts-operations'
import {useCreateContactMutation} from 'redux/contacts/contacts-operations'


const Form = ({contacts}) => {
   // const contact = useSelector(contactsSelectors.getContact)
   const [createContact] = useCreateContactMutation()
   // const dispatch = useDispatch();
   // const loading = useSelector(getLoading);
   // console.log(createContact)
   const [name, setName] = useState('')
   const [number, setNumber] = useState('')
   // const [pokemonName, setPokemonName] = useState('')
   // const { data, error, isFetching } = useFetchContactsQuery('', {
   //    // skip: data === '',
   //    // pollingInterval: 3000,
   //    // refetchOnFocus: true,
   // })
//  console.log(data)
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

   // useEffect(() => {
   //  dispatch(contactsOperations.fetchContact())
   // },[dispatch])

   
  const handelSubmit = e => {
     e.preventDefault();

         const ReturnName = contacts.find(contact => contact.name === name);

    if (ReturnName) {
      alert('This name is already in the phone book ');
    } else {
   createContact({name,number})
      //  dispatch(contactsOperations.addContact({ name, number }));
      //  setPokemonName({ name, number })
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
            {/* <Button type='submit'>{isFetching ? <Spinner>
         <Loader type="bubble-scale" bgColor={"#000"} title={"bubble-scale"} color={'#000'} size={30} />
            </Spinner> : <Add>Add Contact</Add>}</Button> */}
            <Button type='submit'>Add Contact</Button>
      </form>
      )
   
}

export default Form;