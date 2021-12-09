import "./navigation.scss"
import "../../styles/partials/_global.scss"

import LogoSVG from "../../assets/images/BrainFlix-logo.svg"
import SearchSVG from "../../assets/images/Icons/search.svg"
import UploadSVG from "../../assets/images/Icons/upload.svg"
import Button from "../button/button"

function navigation() {
  return (
  <div className="nav">

    <a href="../../App.js"><img className="nav__logo" src={LogoSVG} alt="Logo"></img></a>

    <div className="nav__search-container">
      <form className="nav__form">
        <img className="nav__search-icon" src={SearchSVG} alt="search"></img>
        <input className="nav__search-imput" type="text" name="name" placeholder="Search"></input>
      </form>
      <div class="nav__avatar-container"></div>
    </div>
    <Button icon={UploadSVG} text="UPLOAD"/>

  </div>
  );
}

export default navigation;


