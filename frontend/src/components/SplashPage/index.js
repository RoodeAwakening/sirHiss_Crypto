import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./SplashPage.css";
import splashImage from "../../images/splash_brand-picture.png";
import splashShapes from "../../images/splash_shapes.jpg";
import splashCrypto from "../../images/splash_crypto.png";
import splashCryptoPhone from "../../images/splash_crypto_phone.png";

function SplashPage() {
  return (
    <div className="splash_wrapper">
      <div className="splash_signup">
        <div className="splash_signup-info-container">
          <div className="splash_signup-info">
            <h1>Investing for Everyone</h1>
            <br></br>
            <h3>
              Commission-free investing, plus the tools you need to put your
              money in motion. Sign up and get your first coin for free. Certain
              limitations apply.
            </h3>
            <NavLink to="/signup" id="splash_signup">
              <h1>Sign Up</h1>
            </NavLink>
          </div>
        </div>
        <div className="splash_signup-video-container">
          <div className="splash_signup-video">
            <div>
              <video
                src="https://f000.backblazeb2.com/file/sirhiss/splashSignupVideo.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="splash_middle-1">
        <div className="splash_middle-1_trading-video-container">
          <video
            id="splash_trading-video"
            src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="splash_middle-1_trading-blurb-container">
          <div className="splash_trading-blurb">
            <div>
              
              <h1>We are all investors.</h1>
              <h3>
                So are you. <i class="fas fa-arrow-circle-right"></i>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="splash_middle-2">
        <div className="splash_middle-2_trading-blurb-container-left">
          <div>
            <h1 id="fractional">Introducing Fractional Shares</h1>
            <h2 id="fractional-sub">
              Invest in thousands of stocks with as little as $1.
            </h2>
          </div>
          <div>
            <div className="splash_middle-2_trading-blurb-container-left-points">
              <div className="splash_middle-2_trading-blurb-container-left-blurb">
                <h1>Invest Any Amount</h1>
                <h2>
                  Choose how much you want to invest, and we’ll convert from
                  dollars to parts of a whole share.
                </h2>
              </div>
              <div className="splash_middle-2_trading-blurb-container-left-blurb">
                <h1>Build a Balanced Portfolio</h1>
                <h2>
                  Customize your portfolio with pieces of different companies
                  and funds to help reduce risk.
                </h2>
              </div>
              <div className="splash_middle-2_trading-blurb-container-left-blurb">
                <h1>Trade in Real Time</h1>
                <h2>
                  Trades placed during market hours are executed at that time,
                  so you’ll always know the share price.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="splash_middle-2_trading-blurb-container-right">
          <img src={splashShapes} />
        </div>
      </div>

      <div className="splash_middle-3">
        <div className="splash_middle-3-container">
          <div>
            <img src={splashCrypto} />
          </div>
          <div>
            <h1>Learn as you grow</h1>
            <h2>
              Our goal is to make investing in financial markets more
              affordable, more intuitive, and more fun, no matter how much
              experience you have (or don’t have).
            </h2>
          </div>
        </div>
      </div>
      <div className="splash_middle-4">
        <div>
          <h1>Our Products</h1>
          <img src={splashCryptoPhone} />
          <h2>
            Tap into the cryptocurrency market to buy, hold, and sell Bitcoin,
            Ethereum, Dogecoin, and more, 24/7 with SirHiss Crypto.
          </h2>

          <NavLink to="/signup" id="splash_signup">
            <h1>Sign Up</h1>
          </NavLink>
        </div>
      </div>
      <div className="splash_footer"></div>
    </div>
  );
}
export default SplashPage;
