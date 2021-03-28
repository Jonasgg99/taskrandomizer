import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'

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
      tasks.push(possibleTasks[0])
    }
  }
  return (
    <Box>
      {tasks}
    </Box>
  )
}

export default DailyTaskPage