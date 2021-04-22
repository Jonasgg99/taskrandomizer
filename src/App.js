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
import { ALL_TASKS, ALL_CATEGORIES } from './graphql/queries'

import BottomNav from './components/BottomNav'

import TaskManager from './components/TaskManager'

function App() {
  const dispatch = useDispatch()

  const allTasks = useQuery(ALL_TASKS)
  const allCategories = useQuery(ALL_CATEGORIES)
/*
  console.log(new Date().getDate());
  const a = 22
  const sched = [{date:a, tasks:['1','2']}]
  console.log(sched.filter(i => i.date === new Date().getDay()));*/

  useEffect(() => {
    const dailyTasks = JSON.parse(window.localStorage.getItem('dailyTasks'));
    if (dailyTasks) {
      const refreshedTasks = dailyTasks.filter(task => !task.completed || task.completed === new Date().getDate())
      dispatch(setDailyTasks(refreshedTasks))
    }
  }, [dispatch])

  if (allTasks.loading || allCategories.loading) {
    return <div></div>
  }

  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/manage">
            <TaskManager 
              tasks={allTasks.data.allTasks}
              categories={allCategories.data.allCategories} />
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
