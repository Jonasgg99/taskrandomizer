import Container from '@material-ui/core/Container'
import RandomizeButton from './components/RandomizeButton'
import NumberForm from './components/NumberForm'

import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/daily">
            Today's tasks
          </Route>
          <Route path="/">
            <div>Options</div>
            <NumberForm />
            <div>Category: number of tasks</div>
            <RandomizeButton />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
