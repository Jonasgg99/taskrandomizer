import Container from '@material-ui/core/Container'
import RandomizeButton from './components/RandomizeButton'

function App() {
  return (
    <Container>
      <div>Options</div>
      <div>Category: number of tasks</div>
      <RandomizeButton />
    </Container>
  );
}

export default App;
