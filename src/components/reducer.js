export const reducer = (state, action) => {
  if(action.type === "success"){
    const newPerson = {id: new Date().getTime(), name: action.personName}
    return{
      ...state,
      people: [...state.people, newPerson],
      modal: 'New Person Added',
      isModalOpen: true
    }
  }
  if(action.type === "close-modal"){
    return{
      ...state,
      isModalOpen: false
    }
  }
  if(action.type === 'removePerson'){
    const newPeople = state.people.filter(person => person.id !== action.payload)
    return {
      ...state,
      people: newPeople,
      modal: 'Person Removed',
      isModalOpen: true
    }
  }
}