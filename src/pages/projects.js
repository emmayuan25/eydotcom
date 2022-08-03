import React from 'react';
import Header from '../components/Header';
import Box from '../components/Box';

import SoulEle from "../assets/soulelem.png";
import TripBud from "../assets/tripbud.png";
import SearchArt from "../assets/search-chicago-art.png";

export default function projects() {
  return (
    <div className='page'>
        <Header />
        <div className='projects-container'>
            <Box 
                title="TripBud"
                description="best plan buddy for travelers in budget"
                tags="#Java #JavaScript #GoogleCloud #AppEngine"
                image={TripBud}
            />
            <Box 
                title="Soul Element Reveal" 
                description="find out about your inner soul"
                tags="#JavaScript #PHP #MySQL #HTML/CSS"
                image={SoulEle}
            />
            <Box 
                title="Search Chicago Art" 
                description="get a piece of art from Chicago Institute of Art"
                tags="#ReactHooks"
                image={SearchArt}
            />
        </div>
    </div>
  )
}
