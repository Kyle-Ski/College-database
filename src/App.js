import React, { Component } from 'react'
import logo from './beer.png'
import './App.css'
import Cooler from './components/Cooler'
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

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Beer</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='counter_area'>
        <div className="counter_area">
          <div className="counter_box">   </div>
        </div>
        <Cooler beer={this.state.beer}
                reviewList={this.state.reviewList}
                reviewSetter={this.state.reviewSetter} />
        </div>
        <button onClick={()=> console.log('i work')}> bump </button>
      </div>
    );
  }
}

export default App;