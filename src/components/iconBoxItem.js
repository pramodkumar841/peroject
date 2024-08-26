import React from 'react'

const IconBoxItem = ({src, heading, text}) => {
    return (
        <>
            <div className="box">
                <div className="image">
                    <img src={src} alt="icon"/>
                </div>
                <div className="text">
                    <h3> {heading}</h3>
                    <p> {text}</p>
                </div>
            </div>
        </>
    )
}

export default IconBoxItem