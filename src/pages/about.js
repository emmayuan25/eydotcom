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
          <p className='intro-text mb-4'>Hi there, it's Emma =]</p>
          <p className='mb-2'>I am a Junior at University of Southern California pursuing a Bachelor of Science in Computer Science and a Bachelor of Arts in Cognitive Science.</p>
          <p className='mb-2'>Most of my experiences has been around full-stack web development, with more emphasis on the frontend side, but I am open to learning any kind of new technologies!</p>
          <p className='mb-2'>For the upcoming school year, I'll be looking for an internship in software engineering for Summer 2023, and I'm thinking about learning mobile development and dive deeper into the backend side. Connect me via LinkedIn or Email!</p>
          <p className='mb-4'>Fun Fact: I failed the behind-the-wheel test three times and no, getting a DL is not on my wish list this year. But I do enjoy outdoor activities and exploring California, so if you have a car and enjoys hiking with awkward convos, hit me up and I'll buy you lunch in the campsite of Mt. Whitney :p</p>

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
            <Button text="HTML/JSX" />
            <Button text="Java" />
            <Button text="PHP" />
            <Button text="Python" />
            <Button text="MySQL" />
            <Button text="Node.js" />
            <Button text="TailwindCSS" />
            <Button text="AWS Amplify" />
            <Button text="Heroku" />
          </div>

        </div>
    </div>
  )
}
