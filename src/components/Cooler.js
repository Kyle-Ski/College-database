import React, { Component } from 'react'
import Beer from './Beer'
import { Container } from 'semantic-ui-react'

const Cooler = ({beer}) => {

    return beer.map((beer,i) => {
        return (
            <Container>
            <Beer key={i} beer={beer} />
            </Container>
        )
    })
}

export default Cooler