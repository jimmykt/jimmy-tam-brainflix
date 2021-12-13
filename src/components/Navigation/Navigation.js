import './Navigation.scss';
import '../../styles/partials/_global.scss';

import LogoSVG from "../../assets/images/BrainFlix-logo.svg";
import SearchSVG from "../../assets/images/Icons/search.svg";
import UploadSVG from "../../assets/images/Icons/upload.svg";

import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

function navigation() {
  return (
  <div className="nav">
    <a href="../../App.js"><img className="nav__logo" src={LogoSVG} alt="Logo"></img></a>
    <form className="nav__form">
      <img className="nav__search-icon" src={SearchSVG} alt="search"></img>
      <input className="nav__search-imput" type="text" name="name" placeholder="Search"></input>
    </form>
    <div className="nav__avatar-container"><Avatar /></div>
    <Button icon={UploadSVG} text="UPLOAD"/>
  </div>
  );
}

export default navigation;


