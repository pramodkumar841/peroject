import React from 'react'
import LoungeItem from './loungeItem'
const loungeData = [
    {
        locationSrc: "/images/location-icon-1.png",
        src: "/images/lounge-img1.png",
        heading: "Indra Gandhi Int’l",
        address: "IGI",
        address2: "New Delhi",
    },
    {
        locationSrc: "/images/location-icon-2.png",
        src: "/images/lounge-img2.png",
        heading: "Indra Gandhi Int’l",
        address: "IGI",
        address2: "New Delhi",
    },
    {
        locationSrc: "/images/location-icon-3.png",
        src: "/images/lounge-img3.png",
        heading: "Indra Gandhi Int’l",
        address: "IGI",
        address2: "New Delhi",
    },
];
const LoungeFinder = () => {
    return (
        <>
            <div className="loungeFinderArea">
                <div className="container">
                    <div className="text-center">
                        <h2>Lounge Finder</h2>
                        <p>Check which lounges you can access at a click!</p>
                        <a href="#" className="custom-btn"><span>Try Lounge Finder</span></a>
                    </div>
                    <div className="lounges">
                        {loungeData.map((lounge, index) => (
                            <LoungeItem
                                key={index}
                                locationSrc={lounge.locationSrc}
                                src={lounge.src}
                                heading={lounge.heading}
                                address={lounge.address}
                                address2={lounge.address2}
                            />
                        ))}
                    </div>
                    <video width="100%" autoPlay muted loop>
                        <source src="/images/loungeFinder.mp4" type="video/mp4" />
                    </video>

                </div>
            </div>
        </>
    )
}

export default LoungeFinder