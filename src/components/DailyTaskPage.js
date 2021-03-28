import React from 'react'
import { useSelector } from 'react-redux'

import List from '@material-ui/core/List'
import TaskDetails from '../components/TaskDetails'


const DailyTaskPage = () => {
  const categories = useSelector(state => state.categories)
  const numberOfTasks = useSelector(state => state.numberOfTasks)
  const selection = useSelector(state => state.selection)

  const [selectedTasks, setSelectedTasks] = React.useState([])

  let tasks = []
  let i;

  for (i=0; i<numberOfTasks; i++) {
    const cat = selection[i]
    if (cat === "Any") {
      const allTasks = [].concat.apply([], categories.map(i => i.tasks))
      const random = Math.floor(Math.random() * allTasks.length)
      const randomTask = allTasks[random]
      const category = categories.find(category => category.tasks.includes(randomTask))
      
      tasks.push(
        <TaskDetails key={i} task={randomTask} category={category.name} />
      )
    } else {
      const possibleTasks = categories.find(category => category.name === cat).tasks
      const random = Math.floor(Math.random() * possibleTasks.length)
      const randomTask = possibleTasks[random]

      tasks.push(
        <TaskDetails key={i} task={randomTask} category={cat} />
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