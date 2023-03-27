import logo from './logo.svg';
import './App.css';
let monday = "sad";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React header</h1>
        <p>{monday}</p>
        <p>
          React is so cool!
        </p>
        <p>We are learning some new functionality in React</p>
        <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        </ul>
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
