import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const CompleteButton = () => {
  const [completed, setCompleted] = React.useState(false)

  const completeTask = () => {
    setCompleted(true)
  }
  
  if (!completed) {
    return (
      <Button 
      onClick={completeTask}
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

const TaskDetails = (props) => {
  
  return (
    <Paper>
      <ListItem>
        <ListItemText primary={props.task} secondary={props.category} />
        <CompleteButton />
      </ListItem>
    </Paper>
  )
}

export default TaskDetails