import React, { Component } from 'react'
import Review from './Review'
import {Card} from 'semantic-ui-react'
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
        <Card
            image={this.props.beer.imageUrl}
            header={this.props.beer.name}
            
            description={this.state.showReview ? <Review review={this.props.beer.review}/> : '' }
            {/* <h3>{this.props.beer.name}</h3>
            <img src={this.props.beer.imageUrl} />
            <p>{this.props.beer.abv}</p>
            <button onClick={this.showThatReview}>{this.state.showReview ? 'Hide Review' : 'Show Review'}</button>
            {this.state.showReview ? <Review review={this.props.beer.review}/> : '' } */}
        /> 

        )
    }
}

export default Beer