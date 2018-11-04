import React, { Component } from 'react'
import './App.css'
import Cooler from './components/Cooler'
import logo from './beer.png'
import {Header, Menu} from 'semantic-ui-react'
import AddBeer from './components/AddBeer'

const style = {
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  menu: {
    minWidth: '10vw',
    minHeight: '10vh  '
  }
}
class App extends Component {

  state = {
    beer: [],
    reviewList: [],
    showForm: false
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
        <Menu stackable inverted fluid>
        <Menu.Item>
          <img src={logo} className="App-logo" alt="logo" style={style.menu}/>
        </Menu.Item>
        <Menu.Item name='add' onClick={()=> this.setState({showForm: !this.state.showForm})}>
          Add Beer
        </Menu.Item>
          </Menu>
        </header>
        {this.state.showForm ? <AddBeer /> : ''}
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