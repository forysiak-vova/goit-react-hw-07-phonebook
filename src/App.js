import Form from './component/Form';
import ContactList from './component/ContactList';
import Filter from './component/Filter'
import { Container } from './App.styles'

const App = () => {
 
     return (     
       <Container>
  <h1>Phonebook</h1>
         <Form/>

  <h2>Contacts</h2>
         <Filter /> 
         <ContactList />
</Container>
  )
}

export default App;