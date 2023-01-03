import logo from './logo.svg';
import './App.css';

function App() {

  const message = "Hello, World";
  const name = "Chris";

  const handleStringChange = () => {
      const strings = ['dog','cat','mouse'];
      const int = Math.floor(Math.random() * 3);
      return strings[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see changes.
        </p>
          Hello, {handleStringChange()}! {/*this is how you call a function in JSX*/}
   
        <p>{message}</p>
        {/* this is how you do a comment in JSX. Remember to wrap the comment in a JavaScript expression*/}
      </header>

      
    </div>
  );
}

export default App;
