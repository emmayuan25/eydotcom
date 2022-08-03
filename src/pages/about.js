import React from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./styles/about.css";
import ButtonLink from '../components/ButtonLink';
import Button from '../components/Button';

export default function about() {
  return (
    <div className='about-page'>
        <Header />
        <div className='about-container'>
          <p className='intro-text'>Hi there, it's Emma =]</p>

          <div className='link-container'>
            <ButtonLink 
              icon= {<FontAwesomeIcon icon={['fab', 'linkedin']} />}
              link="https://www.linkedin.com/in/jinyueyuan/"
              text="LinkedIn" 
            />
            <ButtonLink 
              icon= {<FontAwesomeIcon icon={['fab', 'github']} />}
              link="https://github.com/emmayuan25"
              text="GitHub" 
            /> 
            <ButtonLink 
              icon={<FontAwesomeIcon icon={['fab', 'spotify']} />}
              link="https://open.spotify.com/user/emazulinho?si=d48cc82661eb4d97"
              text="Spotify" 
            />
            <ButtonLink 
              icon= {<FontAwesomeIcon icon={['fab', 'readme']} />}
              link="https://drive.google.com/drive/folders/1-Kx9uCUyCWmOH3riknOZBNtYVnc8lpU6?usp=sharing"
              text="Resume" 
            />
    
          </div>

          <div className='skills-div'>
            <Button text="C++" />
            <Button text="JavaScript" />
            <Button text="React" />
            <Button text="HTML/CSS" />
            <Button text="Java" />
            <Button text="Python" />
            <Button text="Java" />
          </div>

        </div>
    </div>
  )
}
