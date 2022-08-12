import React, { useState } from 'react';
import ReactModal from 'react-modal';
import "./styles/box.styles.css";
import TextLink from './TextLink';

function Box(props) {
  const [ modal, setModal ] = useState({ showModal: false });

  const seeDetail = () => {
    setModal({ showModal: true });
  }

  const hideDetail = () => {
      setModal({ showModal: false });
  }

  return (
    <>
      <div className='box-container hover:bg-beige' onClick={()=>seeDetail()}>
          <p className='project-name'>{props.title}</p>
          <p className='m-0 text-lightgrey text-sm'>{props.tags}</p>
      </div>

      <ReactModal
        ariaHideApp={false}
        className="w-4/5 h-4/5 px-16 bg-offwhite shadow-xl mx-auto mt-16 focus:outline-none modal-scroll"
        isOpen={modal.showModal}
        onRequestClose={hideDetail}
        shouldCloseOnOverlayClick={true}
      >
        <p className='pt-8 cursor-pointer' onClick={()=>hideDetail()}>\back</p>
        <h3 className='text-6xl mt-24 underline'>{props.title}</h3>
        <p className='mt-4 text-grey italic'>{props.time}</p>
        <p className='text-2xl my-10'>"{props.description}"</p>
        <p className='text-2xl'>· {props.detail1}</p>
        <p className='text-2xl'>· {props.detail2}</p>
        <p className='text-2xl mb-16'>· {props.detail3}</p>
        <TextLink link={props.link} text="Live Site" />
        <TextLink link={props.github} text="Github" />
        <div className='mt-4 mb-10 flex flex-row flex-wrap'>
          <img className='w-96 mt-8 mr-8 rounded-2xl' src={props.image1} alt={props.title} />
          <img className='w-96 mt-8 rounded-2xl' src={props.image2} alt={props.title} />
        </div>
      </ReactModal>
    </>
  )
}

export default Box;