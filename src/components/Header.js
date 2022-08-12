import React from 'react';
import TextLink from './TextLink';

function Header() {
  return (
    <div className='flex flex-row justify-end mt-6 pr-6 w-screen'>
        <TextLink text="About" link="/about" />
        <TextLink text="Projects" link="/projects" />
        {/* <TextLink text="More" link="/more" /> */}
    </div>
  )
}

export default Header;
