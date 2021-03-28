import { Box } from '@material-ui/core'
import React from 'react'
import NumberForm from './NumberForm'
import RandomizeButton from './RandomizeButton'
import TaskTypeSelection from './TaskTypeSelection'

const SelectionPage = () => {

  return (
    <Box>
      <NumberForm />
      <TaskTypeSelection />
      <RandomizeButton />
    </Box>
  )
}

export default SelectionPage