import React from 'react';
import "./styles/box.styles.css";

function Box(props) {
  return (
    <div className='box-container'>
        <p className='project-name'>{props.title}</p>
        <p className='project-tags'>{props.tags}</p>
    </div>
  )
}

export default Box;