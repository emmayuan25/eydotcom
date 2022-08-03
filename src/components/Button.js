import React from 'react';
import "./styles/Button.styles.css";

function Button(props) {
  return (
    <div className='button-tag-container'>
      {props.text}
    </div>
  )
}

export default Button;