import { useSelector, useDispatch } from 'react-redux'
import {changeFilter} from '../../redux/contacts/contact-action'
import { Input, Label } from './Filter.styles'
import { getFilter } from '../../redux/contacts/contact-selectors'

const Filter = () => {
   const value = useSelector(getFilter)
   const dispatch = useDispatch()
   return (
      <Label>
        Find contacts by name:
         <Input
         type='text'
            value={value}
            onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
         />
</Label>
   )}

export default Filter;





























// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux'
// import changeFil from '../../redux/contacts/contact-action'
// import { Input, Label } from './Filter.styles'

// const Filter = ({ value, onChange }) =>
   
//    (
//       <Label>
//         Find contacts by name:
//          <Input
//          type='text'
//             value={value}
//             onChange={onChange}
//          />
// </Label>
//    )
     
// Filter.propTypes = {
//    value: PropTypes.string,
//    onChange: PropTypes.func,
// };
  
// // const mapStateToProps = state => {
 
// //  return  {
// //       value: state.counter.filter,
// //    }
// // }

// // const mapDispatchToProps = dispatch => ({
// //    onChange: (e) => dispatch(changeFil.changeFilter(e.currentTarget.value))
// // })

// export default Filter;

