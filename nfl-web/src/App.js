import logo from './logo.svg';
import './App.css';
import FootballField from './components/footballField';

function App() {

  const data = {};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Hello World
        </a>
      </header>
      <h1>Football Field</h1>
      <FootballField data={data} />
    </div>
  );
}

export default App;
