import React from 'react';

import "./styles/home.css"
import TextLink from '../components/TextLink';

const home = () => {
  return (
    <div className='page-content'>
        <p className="hello-text">Hello, 你好</p>
        <p className='welcome-text'>you've reached <span className='underline'>emma yuan</span> dot com
        </p>
        <TextLink text="About" link="/about" />
        <TextLink text="Projects" link="/projects" />
        {/* <TextLink text="More" link="/more" /> */}
    </div>
  )
}

export default home;