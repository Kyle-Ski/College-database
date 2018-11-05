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
    list: [],
    reviewList: [],
    showForm: false,
    showDelete: false,
    beerName: '',
    beerImg: '',
    beerAbv: 0,
    beerReview: '',
    itemToDelete: 0
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
      .then(newBeer => this.setState({beer: [...this.state.beer, newBeer.beer], showForm: !this.state.showForm}))
    console.log('submit button')
  }
  
  selectBeerId = (e) => {
    let beerId = this.state.beer.filter(list => list.name === e.target.innerText)[0].id
    this.setState({itemToDelete: beerId})
  } 

  deleteBeer = async (e) => {
    e.preventDefault()
    console.log('other function', this.state.itemToDelete)
    fetch(`http://localhost:3000/beers/${this.state.itemToDelete}`, {
        method: 'DELETE',
        mode: 'cors'
    })
        .then(response => response.json())
        .then(this.deleteHandler)
  }

  deleteHandler = (data) => {
    let newBeer = this.state.beer.filter(item => item.id !== data.deletedBeer.id)
    this.setState({beer: newBeer})
    this.showDeleteForm()
  }

  showDeleteForm = () => {
    this.setState({showDelete: !this.state.showDelete})
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

  structureDropdown = () => {
    let list = this.state.beer.map(beer => {
      return(
        {
          text: beer.name,
          value: beer.id
        }
      )
    })
    this.setState({list: list})
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
        <Menu.Item name='delete' onClick={this.showDeleteForm}>
        Delete a Beer
        </Menu.Item>
          </Menu>
        </header>
        {this.state.showForm ? <AddBeer getName={this.getName} getAbv={this.getAbv} getImg={this.getImg} getReview={this.getReview} submitForm={this.submitForm}/> : ''}
        {this.state.showDelete ? <DeleteBeer 
            beers={this.state.beer}  
            selectBeerId={this.selectBeerId}
            deleteBeer={this.deleteBeer} 
            list={this.state.list}
            />:
            ''}
        <div className='counter_area'>
        <div className="counter_area">
        </div>
        <Header
          as='h3'
          content="List 'O Beer:"
          style={style.h3}
        />
        <div className='cooler'>
          <Cooler beer={this.state.beer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;