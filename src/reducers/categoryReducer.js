

const categoryReducer = (state = [
  {name:'Training', tasks:['pullups','pushups','look']}, 
  {name:'Finance', tasks:['work','apply', 'test']}], 
  action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default categoryReducer