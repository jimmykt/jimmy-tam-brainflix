import './Header.scss';
import '../../styles/partials/_global.scss';
import { Link } from 'react-router-dom';
import LogoSVG from "../../assets/images/BrainFlix-logo.svg";
import SearchSVG from "../../assets/images/Icons/search.svg";
import UploadSVG from "../../assets/images/Icons/upload.svg";
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

function Header() {
  return (
  <header className="header">
    <Link to="/"><img className="header__logo" src={LogoSVG} alt="Logo"></img></Link>
    <div className='header__content'>
      <form className="header__form">
        <img className="header__search-icon" src={SearchSVG} alt="search"></img>
        <input className="header__search-imput" type="text" name="name" placeholder="Search"></input>
      </form>
      <div className="header__avatar-container"><Avatar /></div>

      <Link to="/upload"><Button icon={UploadSVG} text="UPLOAD" /></Link>
    </div>
  </header>
  );
}

export default Header;


