import Form from './component/Form';
import ContactList from './component/ContactList';
import Filter from './component/Filter'
import { Container, Spinner } from './App.styles'
import { getLoading } from './redux/contacts/contact-selectors';
import { useSelector } from 'react-redux';
import Loader from 'react-js-loader'

const App = () => {
  const loading = useSelector(getLoading)
  console.log(loading)
     return (     
       <Container>
  <h1>Phonebook</h1>
         <Form/>
  <h2>Contacts</h2>
         <Filter /> 
         {loading ? <Spinner>
           <Loader type="bubble-top" bgColor={"#000"} title={"loading..."} color={'#FFFFFF'} size={50} />
         </Spinner> :  <ContactList />}
</Container>
  )
}

export default App;