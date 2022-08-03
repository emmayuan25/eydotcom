import React from 'react';
import "./styles/ButtonLink.styles.css";

function ButtonLink(props) {
  return (
    <a href={props.link} className='button-container'>
        {props.icon} {props.text}
    </a>
  )
}

export default ButtonLink;