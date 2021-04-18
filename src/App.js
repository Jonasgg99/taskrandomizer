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

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const dailyTasks = window.localStorage.getItem('dailyTasks');
    if (dailyTasks) {
      dispatch(setDailyTasks(JSON.parse(dailyTasks)))
    }
  }, [dispatch])

  return (
    <Container>
      <Router>
        <Switch>
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
      </Router>
    </Container>
  );
}

export default App;
