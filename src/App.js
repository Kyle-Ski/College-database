import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  state = {
    beer: []
  }

  async componentDidMount(){
    fetch('https://cryptic-depths-21692.herokuapp.com/beers')
      .then(response => response.json())
      .then(data => {
        this.setState({beer: data.beers})
      })
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='counter_area'>
        <div className="counter_area">
          <div className="counter_box">   </div>
        </div>

        </div>
        <button onClick={()=> console.log('i work')}> bump </button>
      </div>
    );
  }
}

export default App;