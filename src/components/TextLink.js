import React from 'react';

function TextLink(props) {
  return (
    <a
        className="text-black text-2xl mr-8 underline hover:text-brightgrey"
        href={props.link}
    >
        {props.text}
    </a>
  )
}

export default TextLink;