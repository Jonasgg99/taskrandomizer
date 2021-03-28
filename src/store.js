import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import categoryReducer from './reducers/categoryReducer'
import selectionReducer from './reducers/selectionReducer'


const numberOfTasksReducer = (state = "3", action) => {
  switch(action.type) {
    case 'SET_NUMBER_OF_TASKS':
      return action.data
    default:
      return state
  }
}

const reducer = combineReducers({
  numberOfTasks: numberOfTasksReducer,
  categories: categoryReducer,
  selection: selectionReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store