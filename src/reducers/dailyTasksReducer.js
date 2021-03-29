
export const addDailyTask = (data) => {
  console.log('adding daily');
  return {
    type:'ADD_DAILYTASK',
    data
  }
}

export const SetDailyTasks = (data) => {
  return {
    type:'SET_DAILY_TASKS',
    data
  }
}

const dailyTasksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_DAILYTASK':
      console.log('inside');
      return [...state, action.data]
    case 'SET_DAILY_TASKS':
      return action.data
    default:
      return state
  }
}

addDailyTask('test')

export default dailyTasksReducer