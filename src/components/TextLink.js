import React from 'react';
import "./styles/TextLink.styles.css";

function TextLink(props) {
  return (
    <a
        className="front-link"
        href={props.link}
    >
        {props.text}
    </a>
  )
}

export default TextLink;