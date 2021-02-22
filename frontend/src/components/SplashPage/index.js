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
            <button><h1>Sign Up</h1></button>
          </div>
        </div>
        <div className="splash_signup-video-container">
          <div className="splash_signup-video">
            <video
              src="https://icecube-us-843.icedrive.io/download?p=2ENabJPIHuzUAo2ezg6LztZE6i9XLSxN9VXscDzLzxZz7kxs5GlwfpABlQjIeNsgpG31SQUkTPMakGUstoTErM.Zz_r0ep5X2spo.u8LDN2WGlNrELYkPlDygcpK4KnJpopPenS0T8BoiITxE5Da4BZSARMb0kaVIU7W2eXiSUwa49p75OwUJQi1Kd.f2uTHr9yKShu11hCoxUdLaWhGow--"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>

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
            <h1>We are all investors.</h1>
            <h3>So are you.</h3>
          </div>
        </div>
      </div>

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
        <div className='splash_middle-3-container'>
          <div>
            <img src={splashCrypto}/>
          </div>
          <div>
            <h1>Learn as you grow</h1>
            <h2>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).</h2>
          </div>
        </div>
      </div>
      <div className="splash_middle-4">
        <div>
          <h1>Our Products</h1>
          <img src={splashCryptoPhone}/>
          <h2>Tap into the cryptocurrency market to buy, hold, and sell Bitcoin, Ethereum, Dogecoin, and more, 24/7 with SirHiss Crypto.</h2>
          <button><h1>Sign Up</h1></button>
        </div>
      </div>
      <div className="splash_middle-5"></div>


    </div>

    //   <div className="splash_fractional-shares-header">
    //     Introducing Fractional Shares
    //   </div>
    //   <div className="splash_fractional-shares-image">
    //     fractional shares image
    //   </div>

    //   <div className="splash_fractional-shares-info-1">
    //     <h1>Invest Any Amount</h1>
    //     <h2>
    //       Choose how much you want to invest, and we’ll convert from dollars to
    //       parts of a whole share.
    //     </h2>
    //   </div>
    //   <div className="splash_fractional-shares-info-2">
    //     <h1>Build a Balanced Portfolio</h1>
    //     <h2>
    //       Customize your portfolio with pieces of different companies and funds
    //       to help reduce risk.
    //     </h2>
    //   </div>
    //   <div className="splash_fractional-shares-info-3">
    //     <h1>Trade in Real Time</h1>
    //     <h2>
    //       Trades placed during market hours are executed at that time, so you’ll
    //       always know the share price.
    //     </h2>
    //   </div>

    //   <div className="splash_manage-video">manage video</div>
    //   <div className="splash_manage-blurb">manage blurb</div>
    //   <div className="splash_footer-1">footer 1</div>
    //   <div className="splash_footer-2">footer 2</div>
    //   <div className="splash_footer-3">footer 3</div>
    //   <div className="splash_footer-4">footer 4</div>
    // </div>
  );
}
export default SplashPage;
