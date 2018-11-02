import React, { Component } from 'react'
import Review from './Review'

class Beer extends Component {

    state = {
        showReview: false
    }

    showThatReview = (e) => {
        e.preventDefault()
        this.setState({showReview: !this.state.showReview })
    }

    render(){
        return(
            <div>
            <p>{this.props.beer.name}</p>
            <img src={this.props.beer.imageUrl} />
            <p>{this.props.beer.abv}</p>
            <button onClick={this.showThatReview}>{this.state.showReview ? 'Hide Review' : 'Show Review'}</button>
            {this.state.showReview ? <Review review={this.props.beer.review}/> : '' }
            </div> 

        )
    }
}

export default Beer