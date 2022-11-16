import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from "./components/MiApi";
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <div>
        <header className='header'>
          <p>Feriados Chile 2022</p>
        </header>

        <MiApi/>

        <footer>
          <Alert key='info' variant='info'>
            Información obtenida desde {' '}
            <Alert.Link target='blank' href="https://www.feriadosapp.com/api/">https://www.feriadosapp.com/api/</Alert.Link>
          </Alert>          
        </footer>
    </div>
  );
}

export default App;
