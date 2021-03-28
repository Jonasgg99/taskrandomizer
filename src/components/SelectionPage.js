import { Box } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import NumberForm from './NumberForm'
import RandomizeButton from './RandomizeButton'
import TaskTypeSelection from './TaskTypeSelection'

const SelectionBoxes = () => {
  const numberOfTasks = useSelector(state => parseInt(state.numberOfTasks))

  let i;
  for (i=0; i<numberOfTasks; i++) {
    console.log('for');
    return (
      <TaskTypeSelection />
    )
  }

}

const SelectionPage = () => {
  const numberOfTasks = useSelector(state => parseInt(state.numberOfTasks))

  let a = []
  let i;
  for (i=0; i<numberOfTasks; i++) {
    console.log('for');
    a.push(<TaskTypeSelection index={i} />)
  }
  console.log(a);

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