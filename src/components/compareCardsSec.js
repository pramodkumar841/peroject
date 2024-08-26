import React from 'react'
import { Link } from 'react-router-dom'

const CompareCardsSec = () => {
    return (
  <>
            <div className="comparecardArea">
                <div className="container">
                    <h2>Compare Cards</h2>
                    <div className="cards">
                        <img src="/images/white-minimal-podium-with-rose-gold-indian-archite-3s 1.png" alt="image"/>
                            <div className="multiC">
                                <img src="/images/compare-card-1.png" alt="image"/>
                                    <img src="/images/compare-card-2.png" alt="image"/>
                                        <img src="/images/compare-card-3.png" alt="image"/>
                                        </div>
                                    </div>
                                    <p>Uncover hidden benefits and find the perfect card for your financial goals.</p>
                                    <Link className="compare-btn"><img src="/images/plus.svg" alt="icon"/> Compare Now</Link>
                                    <div className="campare-video">
                                        <video width="100%" autoPlay muted loop>
                                            <source src="/images/compare-hero.mp4" type="video/mp4" />
                                        </video>
                                    </div>

                            </div>
                    </div>
                </>
                )
}

                export default CompareCardsSec