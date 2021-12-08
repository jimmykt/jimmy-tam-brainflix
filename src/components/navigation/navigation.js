import "./navigation.scss"
import "../../styles/partials/_global.scss"

import Logo from "../../assets/images/BrainFlix-logo.svg"
import Search from "../../assets/images/Icons/search.svg"
import Button from "../button/button"

function navigation() {
  return (
  <div className="nav">
    <a href="../../App.js"><img className="nav__logo" src={Logo} alt="Logo"></img></a>
    <div className="nav__search-container">
      <form>
        <img className="nav__icon-search" src={Search} alt="search"></img>
        <input className="nav__search-imput" type="text" name="name" placeholder="Search"></input>
      </form>
      <div class="nav__avatar-container"></div>
    </div>
    <Button />

  </div>
  );
}

export default navigation;


