import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'

const TaskDetails = (props) => {

  return (
    <Paper>
    <ListItem>
      <ListItemText primary={props.task} secondary={props.category} />
    </ListItem>
    </Paper>
  )
}

export default TaskDetails