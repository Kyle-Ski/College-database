import React, { Component } from 'react'

const Cooler = ({beer}) => {

    const fillCooler = (beer) => {
        return beer.map((beer,i) => {
            return (
                <div>
            <p key={i}>{beer.name}</p>
            <img key={i} src={beer.imageUrl} />
            <p key={i}>{beer.abv}</p>
            <p key={i}>{beer.review}</p>
            </div>
            )

        })
    }
    return (
        <div>{fillCooler(beer)}</div>
    )
}

export default Cooler