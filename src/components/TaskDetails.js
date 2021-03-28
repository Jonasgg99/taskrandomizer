import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const TaskDetails = (props) => {

  return (
    <ListItem>
      <ListItemText primary={props.task} secondary={props.category} />
    </ListItem>
  )
}

export default TaskDetails