import React from 'react'
import { Link } from 'react-router-dom'

const TabItem = ({src, heading, smallHeading, text, tag1, tag2}) => {
    return (
        <>
            <div className="item">
                <div className="image">
                    <img src={src} alt="image" />
                </div>
                <h3>{heading}</h3>
                <div className="tags">
                    <span>{tag1}</span>
                    <span>{tag2}</span>
                </div>
                <h4>{smallHeading}</h4>
                <p>{text}</p>
                <Link to="" className="applylink">Apply Now <img src="/images/Arrow.svg" alt="icon" /></Link>
            </div>
        </>
    )
}

export default TabItem