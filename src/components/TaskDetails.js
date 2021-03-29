import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { completeTask } from '../reducers/dailyTasksReducer'
import { useDispatch } from 'react-redux'

const CompleteButton = ({ task }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(completeTask(task))
  }

  if (!task.completed) {
    return (
      <Button 
      onClick={handleClick}
      color="primary"
      variant="contained"
      >Complete</Button>
    )
  } else {
    return (
      <Button 
      disabled
      variant="contained"
      color="primary"
      >Completed!</Button>
    )
  }
}

const TaskDetails = ({ task }) => {
  
  return (
    <Paper>
      <ListItem>
        <ListItemText primary={task.name} secondary={task.category} />
        <CompleteButton task={task} />
      </ListItem>
    </Paper>
  )
}

export default TaskDetails