import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const date = {
    comment: "hej"
  }

  axios.post('http://localhost:3001', date).then(ok => {
    console.log(ok);
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Bilag!</p>

        <input />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
