import React from 'react';
import "./styles/header.styles.css";
import TextLink from './TextLink';

function Header() {
  return (
    <div className='header-container'>
        <TextLink text="About" link="/about" />
        <TextLink text="Projects" link="/projects" />
        {/* <TextLink text="More" link="/more" /> */}
    </div>
  )
}

export default Header;
