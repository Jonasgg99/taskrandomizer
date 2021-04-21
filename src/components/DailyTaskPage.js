import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import List from '@material-ui/core/List'
import TaskDetails from '../components/TaskDetails'
import { setDailyTasks } from '../reducers/dailyTasksReducer'

const DailyTaskPage = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  const numberOfTasks = useSelector(state => state.numberOfTasks)
  const selection = useSelector(state => state.selection)
  const tasks = useSelector(state => state.tasks)

  let dailyTasks = []
  dailyTasks = useSelector(state => state.dailyTasks)

  useEffect(() => {
    const dailyTasksInStorage = window.localStorage.getItem('dailyTasks');
    if (dailyTasksInStorage) {
      dailyTasks = JSON.parse(dailyTasksInStorage)
    }
  }, [dispatch])

  const randomize = (array) => {
    const random = Math.floor(Math.random() * array.length)
    const selectedEntry = array[random]

    return selectedEntry
  }

    let selectedTasks = []

    let i;
    let task;

    let array = []
    if (dailyTasks.length === 0) {
    for (i = 0; i < numberOfTasks; i++) {
      array.push(i)
    }

    array.forEach(i => {
      const cat = selection[i]
      if (cat === "Any") {
        const allTasks = tasks.filter(task => !selectedTasks.includes(task))

        task = randomize(allTasks)
        selectedTasks.push(task)
        
      } else {
        const possibleTasks = categories.find(category => category.name === cat).tasks
          .filter(i => !selectedTasks.includes(i))
        task = randomize(possibleTasks)

        selectedTasks.push(task)

      }
    })
  }

  useEffect(() => {
    if (dailyTasks.length === 0) {
    dispatch(setDailyTasks(selectedTasks))
    }
  }, [dispatch])
  
  const handleClick = () => {
    localStorage.clear()
  }

  return (
    <div>
    <List>
      {dailyTasks.map(i => 
    <TaskDetails key={i.name} task={i} />)}
    </List>
    <button onClick={handleClick}>reset</button>
    </div>
  )
}

export default DailyTaskPage