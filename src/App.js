import Container from '@material-ui/core/Container'
import RandomizeButton from './components/RandomizeButton'
import NumberForm from './components/NumberForm'

function App() {
  return (
    <Container>
      <div>Options</div>
      <NumberForm />
      <div>Category: number of tasks</div>
      <RandomizeButton />
    </Container>
  );
}

export default App;
