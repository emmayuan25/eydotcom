import React from 'react';
import "./styles/Button.styles.css";

function Button(props) {
  return (
    <div className='button-tag-container px-2 w-fit'>
      {props.text}
    </div>
  )
}

export default Button;