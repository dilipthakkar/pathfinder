import React from "react";
import HeaderImage from "../../assests/image1.png";
import PlayBtn from "../../assests/play.png";
import MonsterLogo from "../../assests/monster.png";
import StartLogo from "../../assests/start.png";
import "./header.css";
import SelectAlgoritm from "../SelectAlgorithm/SelectAlgoritm";
const Header = () => {
  return (
    <div className="header--main--container">
      <img src={HeaderImage} style={{ height: "100%", width: "100%" }} />
      <div className="header--btn">
        <img src={MonsterLogo} className="monster--logo" />
        <div className="header-btn-btn-group">
          {/* <div className="header-btn-btn">select algorithm</div> */}
          <div className="header-btn-btn header-bnt-select"> <SelectAlgoritm /> </div>
          <div className="header-btn-btn">reset grid</div>
          <div className="header-btn-btn header-bnt-select">monster</div>
          <div className="header-btn-btn">
            <img src={PlayBtn} />
          </div>
        </div>
      </div>

      <div className="header--info">
        <div className="header--info--section">
          <div className="header--info--section--text">visited</div>
          <div className="header--info--section--block" style={{backgroundColor : "skyblue"}}></div>
          <div className="header--info--section--block" style={{backgroundColor : "mediumslateblue"}}></div>
        </div>
        <div className="header--info--section">
          <div className="header--info--section--text">start</div>
          <div className="header--info--section--block" style={{backgroundImage : `url(`+StartLogo+`)` , backgroundSize : "cover" , marginTop : "5px"}} ></div>
        </div>
        <div className="header--info--section">
          <div className="header--info--section--text">shortest path</div>
          <div className="header--info--section--block" style={{backgroundColor : "yellow"}}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
