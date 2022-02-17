import Nav from './components/Nav'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Portfolio from './components/Portfolio'
import './App.css';


function App() {
  return (
    <div className="App">
  <Nav></Nav>
  <About></About>
  <ContactForm></ContactForm>
  <Portfolio></Portfolio>
    </div>
  );
}

export default App;
