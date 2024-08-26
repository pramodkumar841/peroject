import React from 'react'

const CardItem = ({ heading, src }) => {
    return (
        <>
            <div class="card">
                <h3>{heading}</h3>
                <img src={src} alt="image" />
            </div>
        </>
    )
}

export default CardItem