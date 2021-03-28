

const categoryReducer = (state = [
  {name:'Training', tasks:['pullups','pushups']}, 
  {name:'Finance', tasks:['work','apply']}], 
  action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default categoryReducer