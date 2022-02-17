import Nav from './components/Nav'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import projects from './projects'
import { Component } from 'react'
import React from 'react'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'home'
    }
    
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(event) {
    if (event.target.id === "about") {
      this.setState({ mode: 'home' });
    } else if (event.target.id === "portfolio") {
      this.setState({ mode: 'portfolio' });
    } else if (event.target.id === "contact") {
      this.setState({ mode: 'contact' });
    }
  }

  render() {
    if (this.state.mode === 'portfolio') {
      return (
        <>
          <Nav onLinkClick={this.onLinkClick} />
          <main>
            <Portfolio projects={projects} />
            <br />
          </main>
      
        </>
      )
    } else if (this.state.mode === 'contact') {
      return (
        <>
          <Nav onLinkClick={this.onLinkClick} />
          <main>
            <ContactForm />
          </main>
          <Footer />
        </>
      )
    } else {
      return (
        <>
          <Nav onLinkClick={this.onLinkClick} />
          <main>
            <About />
          </main>
          <Footer />
        </>
      )
    }
  }
}
export default App;