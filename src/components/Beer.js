import React, { Component } from 'react'
import Review from './Review'
import {Card, Button, Image} from 'semantic-ui-react'

const style = {
    card: {
        marginLeft: '10vw',
        marginRight: '10vw'
    },
    button: {
        marginTop: '1vh'
    }
}

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
        <Card fluid color='blue' style={style.card}>
        <Card.Content>
            <Card.Header>{this.props.beer.name}</Card.Header>
            <Image size='large' src={this.props.beer.imageUrl} rounded/>
        <Card.Content extra>
            <div>
            <Button style ={style.button} onClick={this.showThatReview} basic size='mini' color='blue'>Show Review</Button>
            </div>
        </Card.Content>
            <Card.Description>{this.state.showReview ? <Review review={this.props.beer.review}/> : '' }</Card.Description>
        </Card.Content>
        </Card> 

        )
    }
}

export default Beer