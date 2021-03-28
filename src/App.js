import Container from '@material-ui/core/Container'
import RandomizeButton from './components/RandomizeButton'
import NumberForm from './components/NumberForm'
import SelectionPage from './components/SelectionPage'

import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import DailyTaskPage from './components/DailyTaskPage'

function App() {
  return (
    <Container>
      <Router>
        <Switch>
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
