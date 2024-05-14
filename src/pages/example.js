import './example.css';
import logo from './logo.svg';

export default function Example() {
  return (
    <div className="example">
      <header className="example-header">
        <img src={logo} className="example-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> or <code>src/pages/example.js</code> and save to reload. 
        </p>
        <a
          className="example-link"
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