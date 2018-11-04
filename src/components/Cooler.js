import React, { Component } from 'react'
import Beer from './Beer'
import {Card} from 'semantic-ui-react'

const Cooler = ({beer}) => {

    return beer.map((beer,i) => {
        return (
            <Card.Group>
            <Beer key={i} beer={beer} />
            </Card.Group>
        )
    })
}

export default Cooler