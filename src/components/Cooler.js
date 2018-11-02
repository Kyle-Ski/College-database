import React, { Component } from 'react'
import Beer from './Beer'
const Cooler = ({beer}) => {

    return beer.map((beer,i) => {
        return (
            <Beer key={i} beer={beer} />
        )
    })
}

export default Cooler