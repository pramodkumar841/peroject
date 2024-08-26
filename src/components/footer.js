import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const companyLinks = [
        { name: 'About BankKaro', path: '#' },
        { name: 'Vision and Mission', path: '#' },
        { name: 'Our Team Members', path: '#' },
        { name: 'Partners and Investors', path: '#' }
    ];

    const blogLinks = [
        { name: 'BankKaro Savings', path: '#' },
        { name: 'Cashless Makes Perfect', path: '#' },
        { name: 'BankKaro No Interest', path: '#' },
        { name: 'BankKaro Digital Wallet', path: '#' }
    ];

    const featureLinks = [
        { name: 'Card Genius', path: '#' },
        { name: 'Lounge Finder', path: '#' },
        { name: 'Beat My Card', path: '#' },
        { name: 'Compare Cards', path: '#' }
    ];

    const contactLinks = [
        { name: 'Contact Us', path: '#' },
        { name: 'Contact Support', path: '#' }
    ];

    const legalLinks = [
        { name: 'Terms', path: '#' },
        { name: 'Privacy', path: '#' }
    ];

    const renderLinks = (links) => (
        links.map((link, index) => (
            <li key={index}>
                <Link to={link.path}>{link.name}</Link>
            </li>
        ))
    );

    return (
        <>
            <div className="footerWrapper">
                <div className="container">            
                    <div className="col-foot">
                        <div className="social">
                            <Link to="#" title="Twitter"><img src="/images/twitter.svg" alt="twitter"/></Link>
                            <Link to="#" title="Instagram"><img src="/images/instagram.svg" alt="instagram"/></Link>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.</p>
                        
                        <div className="store-btns">
                            <Link to="#" className="custom-btn"><span><img src="/images/app_store.svg" alt="app store"/> APP STORE</span></Link>
                            <Link to="#" className="custom-btn"><span><img src="/images/google_play.svg" alt="google play"/> GOOGLE PLAY</span></Link>
                        </div>

                        <p className="lg-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    </div>

                    <div className="col-foot">            
                        <div className="row-col">
                            <div className="col">
                                <h3>COMPANY</h3>
                                <ul>
                                    {renderLinks(companyLinks)}
                                </ul>
                            </div>

                            <div className="col">
                                <h3>BLOG</h3>
                                <ul>
                                    {renderLinks(blogLinks)}
                                </ul>
                            </div>

                            <div className="col">
                                <h3>FEATURES</h3>
                                <ul>
                                    {renderLinks(featureLinks)}
                                </ul>
                            </div>

                            <div className="col pb-0">
                                <h3>CONTACT</h3>
                                <ul>
                                    {renderLinks(contactLinks)}
                                </ul>
                            </div>

                            <div className="col pb-0">
                                <h3>LEGAL</h3>
                                <ul>
                                    {renderLinks(legalLinks)}
                                </ul>
                            </div>

                            <div className="col pb-0 bottom">
                                <div className="copyright">&copy; 2024 Bankaro <br/>
                                    Powered by Pouring Pounds</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
