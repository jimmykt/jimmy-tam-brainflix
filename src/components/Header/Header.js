import './Header.scss';
import '../../styles/partials/_global.scss';

import LogoSVG from "../../assets/images/BrainFlix-logo.svg";
import SearchSVG from "../../assets/images/Icons/search.svg";
import UploadSVG from "../../assets/images/Icons/upload.svg";

import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

function Header() {
  return (
  <header className="header">
    <a href="../../App.js"><img className="header__logo" src={LogoSVG} alt="Logo"></img></a>
    <div className='header__content'>
      <form className="header__form">
        <img className="header__search-icon" src={SearchSVG} alt="search"></img>
        <input className="header__search-imput" type="text" name="name" placeholder="Search"></input>
      </form>
      <div className="header__avatar-container"><Avatar /></div>
      <Button icon={UploadSVG} text="UPLOAD"/>
    </div>
    
  </header>
  );
}

export default Header;


