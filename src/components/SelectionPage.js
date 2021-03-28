import { Box } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import NumberForm from './NumberForm'
import RandomizeButton from './RandomizeButton'
import TaskTypeSelection from './TaskTypeSelection'

const SelectionPage = () => {
  const numberOfTasks = useSelector(state => parseInt(state.numberOfTasks))

  let a = []
  let i;
  for (i=0; i<numberOfTasks; i++) {
    a.push(<TaskTypeSelection key={i} index={i} />)
  }
  /*
  const verifySelection = () => {
    const trueSelection = selection.slice(0,numberOfTasks-1)
    if (trueSelection.count(category) < category.tasks.length) {
      return console.log('not enough tasks in category', category);
    }
  }
  */

  return (
    <Box>
      <NumberForm />
      {a}
      <br/>
      <RandomizeButton />
    </Box>
  )
}

export default SelectionPage