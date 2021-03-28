import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box'

const DailyTaskPage = () => {
  const categories = useSelector(state => state.categories)
  const numberOfTasks = useSelector(state => state.numberOfTasks)

  return (
    <Box>
      a
    </Box>
  )
}

export default DailyTaskPage