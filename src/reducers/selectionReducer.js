

export const changeSelection = (data, index) => {
  return {
      type: 'SET_SELECTION',
      data,
      index
  }
}

const selectionReducer = (state = ["Any", "Any", "Any", "Any", "Any"], action) => {
  switch(action.type) {
    case 'SET_SELECTION':
      const newState = state
      newState.splice(action.index, 1, action.data)
      return newState
    default:
      return state
  }
}

export default selectionReducer