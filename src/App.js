import React, { Component } from 'react';
import './App.css';

import Home from './Header'
import Persona from './Person'

class App extends Component {
   
  state = {
    message: "Mensaje Recargado",
    edittext: "Pille"
  }

  updateMessage = message => this.setState({message})

  updateedit = (event) => this.setState({edittext : event.target.value  })



  render() {
    return (
      <div>
        <Home message={this.state.message} updateMessage={this.updateMessage} changed={this.updateedit}/>
        <Persona cambiando={this.state.edittext}/>
        <Persona />
        <Persona />
      </div>
    );
  }
}

export default App;
