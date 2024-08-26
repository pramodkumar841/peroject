import React from 'react'

const AboutUsSec = () => {
    return (
        <>
            <div className="aboutArea">
                <div className="container">
                    <div className="sub-title">WHAT THEY SAY ABOUT BANKKARO</div>
                    <h2>See the <span>Impact</span> in action</h2>
                    <div className="text-LR">
                        <div className="title">
                            <h3>Ratan Tata</h3>
                            <span className="designation">Chairperson Tata Group</span>
                        </div>
                        <div className="desc">
                            “ BankKaro helped me find the perfect credit card that matches my spending on groceries and travel. Highly recommend it for personalized credit card options. “
                        </div>
                    </div>
                </div>
                <div className="avatar">
                    <img src="/images/avatar.png" alt="avatar" />
                </div>
                <video width="100%" autoPlay muted loop>
                    <source src="/images/about.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default AboutUsSec