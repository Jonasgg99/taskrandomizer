import Container from '@material-ui/core/Container'
import SelectionPage from './components/SelectionPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import DailyTaskPage from './components/DailyTaskPage'
import MainPage from './components/MainPage'
import { setDailyTasks } from './reducers/dailyTasksReducer'
import { useQuery } from '@apollo/client'
import { ALL_TASKS } from './graphql/queries'

import BottomNav from './components/BottomNav'

import TaskManager from './components/TaskManager'

function App() {
  const dispatch = useDispatch()

  const allTasks = useQuery(ALL_TASKS)

  useEffect(() => {
    const dailyTasks = window.localStorage.getItem('dailyTasks');
    if (dailyTasks) {
      dispatch(setDailyTasks(JSON.parse(dailyTasks)))
    }
  }, [dispatch])

  if (allTasks.loading) {
    return <div></div>
  }

  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/manage">
            <TaskManager tasks={allTasks.data.allTasks} />
          </Route>
          <Route path="/test">
            <MainPage />
          </Route>
          <Route path="/daily">
            <DailyTaskPage />
          </Route>
          <Route path="/">
            <SelectionPage />
          </Route>
        </Switch>

        <BottomNav />

      </Router>

    
    </Container>
  );
}

export default App;
