import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        Let's Eats App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="play_store" />
        <img src={assets.app_store} alt="app_store" />
      </div>
    </div>
  );
};

export default AppDownload;
