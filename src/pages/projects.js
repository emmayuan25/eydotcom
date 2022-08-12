import React from 'react';
import Header from '../components/Header';
import Box from '../components/Box';

import SoulEle from "../assets/soulelem.png";
import SoulEle2 from "../assets/soulelem2.png";
import TripBud from "../assets/tripbud.png";
import TripBud2 from "../assets/tripbud2.png";
import SearchArt from "../assets/search-chicago-art.png";
import SearchArt2 from "../assets/searchchi2.png";
import WW from "../assets/weatherwear.png";
import WW2 from "../assets/weatherwear2.png";

export default function projects() {
  return (
    <div className='page'>
        <Header />
        <div className='w-screen flex flex-row flex-wrap pl-16 pt-8'>
            <Box 
                title="TripBud"
                tags="#Java #JavaScript #GoogleCloudPlatform #AppEngine"
                time="May to August 2022"
                link="https://summer22-sps-36.appspot.com/"
                github="https://github.com/emmayuan25/summer-2022-team36"
                description="best planning tool buddy for travelers with budgets"
                detail1="full-stack web app, Google Software Product Sprint 2022 final project"
                detail2="focused on JavaScript and implementation of responsive components"
                detail3="technologies used includes JavaScript, Java, and Google Cloud Platform, hosted with AppEngine"
                image1={TripBud}
                image2={TripBud2}
            />
            <Box 
                title="Soul Element Reveal" 
                tags="#JavaScript #PHP #MySQL"
                time="May 2022"
                link="http://303.itpwebdev.com/~jinyueyu/final_project_final/home.php"
                github="https://github.com/emmayuan25/reveal-soul-element"
                description="find out about your inner soul"
                detail1="final project for ITP303 Spring 2022, Full-Stack Web Development"
                detail2="full-stack web app, super interesting try it out!"
                detail3="technologies used includes JavaScript, MySQL, and PHP; hosted with cPanel"
                image1={SoulEle}
                image2={SoulEle2}
            />
            <Box 
                title="Search Chicago Art" 
                tags="#ReactHooks"
                time="May 2022"
                link="http://emmayuan.com/search-chicago-art/"
                github="https://github.com/emmayuan25/search-chicago-art"
                description="get a piece of art from Chicago Institute of Art"
                detail1="react app using react hooks"
                detail2="give a word, get 10 arts"
                detail3="technologies used includes React.js, jsx/css"
                image1={SearchArt}
                image2={SearchArt2}
            />
            <Box 
                title="WeatherWear" 
                tags="#AthenaHacks"
                time="Feb 2022"
                link="http://weatherwear.tech/"
                github="https://github.com/emmayuan25/weatherwear"
                description="get fashion advise base on your current temp"
                detail1="full-stack web app built in 24 hours (in cold USC basement=/)"
                detail2="frontend implemented with JavaScript, HTML/CSS"
                detail3="backend supported by Firebase Realtime Database"
                image1={WW}
                image2={WW2}
            />
        </div>
    </div>
  )
}
