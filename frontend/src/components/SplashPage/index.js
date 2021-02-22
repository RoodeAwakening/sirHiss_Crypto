import "./SplashPage.css";
import splashVideo from "../../images/splashSignupVideo.png";

function SplashPage() {
  return (
    <div className="grid-container">
      <div className="splash_signup-info">
        <div className="splash_signup-info-container">
          <h1>Investing for Everyone</h1>
          <br></br>
          <h3>
            Commission-free investing, plus the tools you need to put your money
            in motion. Sign up and get your first coin for free. Certain
            limitations apply.
          </h3>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="splash_signup-video">
        <div className="splash_signup-video-container">
          <img src={splashVideo} />
        </div>
      </div>
      <div className="splash_trading-video">
        trading video
        <video
          src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="splash_trading-blurb">trading blurb</div>
      <div className="splash_fractional-shares-header">
        fractional shares header
      </div>
      <div className="splash_fractional-shares-image">
        fractional shares image
      </div>
      <div className="splash_fractional-shares-info-1">fr share info 1</div>
      <div className="splash_fractional-shares-info-2">fr share info 2</div>
      <div className="splash_fractional-shares-info-3">fr share info 3</div>
      <div className="splash_manage-video">manage video</div>
      <div className="splash_manage-blurb">manage blurb</div>
      <div className="splash_footer-1">footer 1</div>
      <div className="splash_footer-2">footer 2</div>
      <div className="splash_footer-3">footer 3</div>
      <div className="splash_footer-4">footer 4</div>
    </div>
  );
}
export default SplashPage;
