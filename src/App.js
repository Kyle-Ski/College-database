import React, { Component } from 'react'
import './App.css'
import Cooler from './components/Cooler'
import logo from './beer.png'
import {Header} from 'semantic-ui-react'

const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  }
}
class App extends Component {

  state = {
    beer: [],
    reviewList: []
  }

  async componentDidMount(){
    fetch('https://cryptic-depths-21692.herokuapp.com/beers')
      .then(response => response.json())
      .then(data => {
        this.setState({beer: data.beers})
      })
  } 

  reviewSetter = (e) => {
    this.setState({reviewList: this.state.reviewList.concat(e.target.key) })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button>Add A Beer</button>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Beer</h1>
        </header>
        <div className='counter_area'>
        <div className="counter_area">
        </div>
        <Header
          as='h3'
          content="List 'O Beer:"
          style={style.h3}
        />
        <div className='cooler'>
          <Cooler  beer={this.state.beer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;