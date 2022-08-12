import React from 'react';

function TextLink(props) {
  return (
    <a
        className="text-black text-2xl mr-8 underline"
        href={props.link}
    >
        {props.text}
    </a>
  )
}

export default TextLink;