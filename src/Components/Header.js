import React from 'react';
import '../styles/header.css'
const Header= (props) => {
  return (
    <header>
        <a href="#."><img src="aribnb-logo.png" class='airbnb-logo' /></a>
        <nav>
            <h1>Become a Host</h1>
            <img src="world.svg" />
            <div class="user">
                <img src="menu.svg" class="menu" />
                <img src="https://picsum.photos/200" class="user-pic" />
            </div>
        </nav>
    </header>
  );
}

export default Header;