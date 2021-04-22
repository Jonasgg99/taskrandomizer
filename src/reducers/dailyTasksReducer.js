
export const addDailyTask = (data) => {
  return {
    type:'ADD_DAILYTASK',
    data
  }
}

export const setDailyTasks = (data) => {
  console.log(data);
  return {
    type:'SET_DAILY_TASKS',
    data
  }
}

export const completeTask = (data) => {
  return {
    type:'COMPLETE_TASK',
    data
  }
}

const dailyTasksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_DAILYTASK':
      const newTaskList = [...state, action.data]
      window.localStorage.setItem(
        'dailyTasks', JSON.stringify(newTaskList)
      )
      return [...state, action.data]
    case 'SET_DAILY_TASKS':
      const initTasks = action.data
      window.localStorage.setItem(
        'dailyTasks', JSON.stringify(initTasks))
      return initTasks
    case 'COMPLETE_TASK':
      const newState = state.map(task => 
        task.name === action.data.name
        ? {...task, completed: new Date().getDate()}
        : task)
        window.localStorage.setItem(
          'dailyTasks', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}

addDailyTask('test')

export default dailyTasksReducer