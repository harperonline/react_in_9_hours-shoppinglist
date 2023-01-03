import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

  const message = "Hello, World";
  const name = "Chris";

  return (
    <div className="App">
      <Header /> {/* import the child component */}
      <Content />
      <Footer />

      
    </div>
  );
}

export default App;
