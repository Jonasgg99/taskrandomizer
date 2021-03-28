import React from 'react'
import { useSelector } from 'react-redux'

import List from '@material-ui/core/List'
import TaskDetails from '../components/TaskDetails'


const DailyTaskPage = () => {
  const categories = useSelector(state => state.categories)
  const numberOfTasks = useSelector(state => state.numberOfTasks)
  const selection = useSelector(state => state.selection)

  let tasks = []
  let i;

  for (i=0; i<numberOfTasks; i++) {
    const cat = selection[i]
    if (cat === "Any") {
      const allTasks = [].concat.apply([], categories.map(i => i.tasks))
      tasks.push(allTasks[0])
    } else {
      const possibleTasks = categories.find(category => category.name === cat).tasks
      tasks.push(
        <TaskDetails key={i} task={possibleTasks[0]} category={cat} />
      )
    }
  }
  return (
    <List>
      {tasks}
    </List>
  )
}

export default DailyTaskPage