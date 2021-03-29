import React from 'react'
import { useSelector } from 'react-redux'

import List from '@material-ui/core/List'
import TaskDetails from '../components/TaskDetails'


const DailyTaskPage = () => {
  const categories = useSelector(state => state.categories)
  const numberOfTasks = useSelector(state => state.numberOfTasks)
  const selection = useSelector(state => state.selection)

  const dailyTasks = useSelector(state => state.dailyTasks)

  const randomize = (array) => {
    const random = Math.floor(Math.random() * array.length)
    const selectedEntry = array[random]

    return selectedEntry
  }

  let selectedTasks = []

  let tasksToShow = []
  let i;
  let task;

  let array = []

  for (i = 0; i < numberOfTasks; i++) {
    array.push(i)
  }

  array.forEach(i => {
    const cat = selection[i]
    if (cat === "Any") {
      const allTasks = [].concat.apply([], categories.map(i => i.tasks))
        .filter(i => !selectedTasks.includes(i))

      task = randomize(allTasks)
      const category = categories.find(category => category.tasks.includes(task))
      selectedTasks.push(task)

      tasksToShow.push(
        <TaskDetails key={i} task={task} category={category.name} />
      )
    } else {
      const possibleTasks = categories.find(category => category.name === cat).tasks
        .filter(i => !selectedTasks.includes(i))
      task = randomize(possibleTasks)

      selectedTasks.push(task)

      tasksToShow.push(
        <TaskDetails key={i} task={task} category={cat} />
      )
    }
  })


  return (
    <List>
      {tasksToShow}
    </List>
  )
}

export default DailyTaskPage