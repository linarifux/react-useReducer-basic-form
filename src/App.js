import react, {useEffect,useReducer, useRef} from 'react';
import './App.css';
import Modal from './components/Modal';
import { reducer } from './components/reducer';

const defaultState = {
  people:[],
  modal:'',
  isModalOpen: false
}

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const refContainer = useRef(null)
  const closeModal = () => {
    dispatch({type: 'close-modal'})
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if(refContainer.current.value){
      dispatch({type: 'success', personName:refContainer.current.value})
      refContainer.current.value= ''
    }
  }
  return (
    
    <div className="container">
      <h1>Use Reducer Example - Basic Form</h1>
      {state.isModalOpen && <Modal modalContent={state.modal} closeModal={closeModal}/>}
      <div className="form">
        <form >
          <div className="name">
          <input type="text" ref={refContainer}/>
        </div>
        <div className="primary-btn"><button type="submit" onClick={(e) => submitHandler(e)}>Add</button></div>
        </form>
      </div>
      <div className="people">
        {state.people.map(person => {
          return(
            <div className="person" key={person.id}>
              <p>{person.name}</p>
              <button className="remove" onClick={() => dispatch({type:'removePerson', payload: person.id})}>Remove</button>
            </div>
          )
        })}
      </div>
    </div>
    
  );
}

export default App;
