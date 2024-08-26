import React from 'react'

const LoungeItem = ({locationSrc, src, heading, address, address2}) => {
    return (
        <>
            <div className="item">
                <div className="location">
                    <div className="image">
                        <img src={locationSrc} alt="image" />
                    </div>
                    <div className="text">
                        <h3>{heading}</h3>
                        <div className="lcrum">
                            <span>{address}</span>
                            <span>{address2}</span>
                        </div>
                    </div>
                </div>
                <div className="limage">
                    <img src={src} alt="image" />
                </div>
            </div>
        </>
    )
}

export default LoungeItem