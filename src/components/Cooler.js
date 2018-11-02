import React, { Component } from 'react'

const Cooler = ({beer, reviewList, reviewSetter}) => {

    const fillCooler = (beer) => {
        return beer.map((beer,i) => {
            
            let seeReview = reviewList.includes(beer.id) ? '' : 'hidden'

            return (
                <div>
            <p key={i}>{beer.name}</p>
            <img key={i} src={beer.imageUrl} />
            <p key={i}>{beer.abv}</p>
            <p className={seeReview} key={i}>{beer.review}</p>
            <button onClick={ () => reviewSetter() }>see review</button>
            </div>
            )

        })
    }
    return (
        <div>{fillCooler(beer)}</div>
    )
}

export default Cooler