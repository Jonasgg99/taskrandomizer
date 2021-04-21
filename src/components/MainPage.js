import { Box } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import TaskDetails from './TaskDetails'
import List from '@material-ui/core/List'

import AddTaskBox from './AddTaskBox'

const MainPage = () => {
  const dailyTasks = useSelector(state => state.dailyTasks)

  return (
    <div>
      <Box>
        <List>
          {dailyTasks.map(i => 
            <TaskDetails key={i.name} task={i} />)}
        </List>
        <AddTaskBox index={0}/>
      </Box>
    </div>
  )
}

export default MainPage