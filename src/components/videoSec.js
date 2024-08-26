import React from 'react'

const VideoSec = () => {
    return (
        <>
            <div className="video-hero">
                <video autoPlay muted loop>
                    <source src="/images/hero.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default VideoSec