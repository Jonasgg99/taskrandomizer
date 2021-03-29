import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import categoryReducer from './reducers/categoryReducer'
import selectionReducer from './reducers/selectionReducer'
import dailyTasksReducer from './reducers/dailyTasksReducer'


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
  selection: selectionReducer,
  dailyTasks: dailyTasksReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store