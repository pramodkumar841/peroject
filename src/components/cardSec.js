import React from 'react'
import CardItem from './cardItem'
const cardItems = [
    {
        src: "/images/card-kundali.png",
        heading: "Card Kundali"
    },
    {
        src: "/images/beat-my-card.png",
        heading: "Beat My Card"
    },
    {
        src: "/images/Compare-Cards.png",
        heading: "Compare Cards"
    },
    {
        src: "/images/Lounge-Finder.png",
        heading: "Lounge Finder"
    },
];
const CardSec = () => {
    return (
        <>
            <div class="cardArea">
                <div class="container">
                    {cardItems.map((item, index) => (
                        <CardItem
                            key={index}
                            src={item.src}
                            heading={item.heading}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardSec