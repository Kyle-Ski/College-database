import React, { Component } from 'react'
import './App.css'
import Cooler from './components/Cooler'
import logo from './beer.png'
import {Header, Menu} from 'semantic-ui-react'
import AddBeer from './components/AddBeer'
import DeleteBeer from './components/DeleteBeer'

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
    showForm: false,
    showDelete: false,
    beerName: '',
    beerImg: '',
    beerAbv: 0,
    beerReview: ''
  }

  async componentDidMount(){
    fetch('http://localhost:3000/beers')
      .then(response => response.json())
      .then(data => {
        this.setState({beer: data.beers})
      })
  } 
  
  submitForm = async (e) => {
    e.preventDefault()
    let data = {
      name: this.state.beerName,
      imageUrl: this.state.beerImg,
      abv: this.state.beerAbv,
      review: this.state.beerReview
    }
    fetch('http://localhost:3000/beers',{
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(newBeer => this.setState({beer: [...this.state.beer, newBeer.beer]}))
    console.log('submit button')
  }

  deleteBeer = async (e, id) => {
    e.preventDefault()
    fetch(`http://localhost:3000/beers/${id}`, {
      method: 'DELETE',
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  getName = (e) => {
    this.setState({beerName: e.target.value})
  }
  getImg = (e) => {
    this.setState({beerImg: e.target.value})
  }
  getAbv = (e) => {
    this.setState({beerAbv: Number(e.target.value)})
  }
  getReview = (e) => {
    this.setState({beerReview: e.target.value})
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
        <Menu.Item name='delete' onClick={() => this.setState({showDelete: !this.state.showDelete})}>
        Delete a Beer
        </Menu.Item>
          </Menu>
        </header>
        {this.state.showForm ? <AddBeer getName={this.getName} getAbv={this.getAbv} getImg={this.getImg} getReview={this.getReview} submitForm={this.submitForm}/> : ''}
        {this.state.showDelete ? <DeleteBeer beers={this.state.beer} deleteBeer={this.deleteBeer} />: ''}
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