import Form from './component/Form';
import ContactList from './component/ContactList';
import Filter from './component/Filter'
import { Container } from './App.styles'
import { getLoading } from './redux/contacts/contact-selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const loading = useSelector(getLoading)
  console.log(loading)
     return (     
       <Container>
  <h1>Phonebook</h1>
         <Form/>
  {loading && <h1>Loading...</h1>}
  <h2>Contacts</h2>
         <Filter /> 
         <ContactList />
</Container>
  )
}

export default App;