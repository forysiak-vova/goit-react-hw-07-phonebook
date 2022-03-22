import Form from './component/Form';
import ContactList from './component/ContactList';
import Filter from './component/Filter'
import { Container, Spinner } from './App.styles'
// import { getLoading } from './redux/contacts/contact-selectors';
import { useSelector } from 'react-redux';
import Loader from 'react-js-loader'
import { useFetchContactsQuery, useDeleteContactMutation } from './redux/contacts/contacts-operations'
import { getFilter } from './redux/contacts/contact-selectors';
// import { useDeleteContactMutation } from './redux/contacts/contacts-operations';

const App = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const [deleteContact] = useDeleteContactMutation();
  // const loading = useSelector(getLoading);
  // console.log(data)
  
   const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
      );
      return visibleContacts;
  }
     return (     
         <Container>
         <h1>Phonebook</h1>
         <Form contacts={data}/>
         <h2>Contacts</h2>
         <Filter /> 
         {isFetching? <Spinner>
         <Loader type="bubble-top" bgColor={"#000"} title={"loading..."} color={'#FFFFFF'} size={50} />
         </Spinner> : data && <ContactList contacts={getVisibleContacts()} ondeleteContact={deleteContact} />}
         {/* <ContactList contacts={getVisibleContacts()} ondeleteContact={deleteContact} /> */}
</Container>
  )
}

export default App;