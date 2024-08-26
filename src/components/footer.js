import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
        <div className="container">            
          <div className="col-foot">
            <div className="social">
              <a href="#" title="Twitter"><img src="/images/twitter.svg" alt="twitter"/></a>
              <a href="#" title="Instagram"><img src="/images/instagram.svg" alt="instagram"/></a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. </p>
            
            <div className="store-btns">
              <a href="#" className="custom-btn"><span><img src="/images/app_store.svg" alt="app store"/> APP STORE</span></a>
              <a href="#" className="custom-btn"><span><img src="/images/google_play.svg" alt="app store"/> GOOGLE PLAY</span></a>
            </div>

            <p className="lg-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>

          </div>

          <div className="col-foot">            
            <div className="row-col">
              <div className="col">
                <h3>COMPANY</h3>
                <ul>
                  <li><a href="#">About BankKaro</a></li>
                  <li><a href="#">Vision and Mission</a></li>
                  <li><a href="#">Our Team Members</a></li>
                  <li><a href="#">Partners and Investors</a></li>
                </ul>

              </div>
           

              <div className="col">
                <h3>BLOG</h3>
                <ul>
                  <li><a href="#">BankKaro Savings</a></li>
                  <li><a href="#">Cashless Makes Perfect</a></li>
                  <li><a href="#">BankKaro No Interest</a></li>
                  <li><a href="#">BankKaro Digital Wallet</a></li>
                </ul>

              </div>
             

              <div className="col">
                <h3>FEATURES</h3>
                <ul>
                  <li><a href="#">Card Genius</a></li>
                  <li><a href="#">Lounge Finder</a></li>
                  <li><a href="#">Beat My Card</a></li>
                  <li><a href="#">Compare Cards</a></li>
                </ul>

              </div>
          

              <div className="col pb-0">
                <h3>CONTACT</h3>
                <ul>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Contact Support</a></li>
                </ul>

              </div>


              <div className="col pb-0">

                <h3>LEGAL</h3>

                <ul>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
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
    )
}

export default Footer