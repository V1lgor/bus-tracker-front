import React from 'react';
import CloseButton from './CloseButton';

const Modal = (props) => {
  return (
    <div className='backdrop'>
      <div className='modal'>
        <CloseButton onClick={props.closeModal}/>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
