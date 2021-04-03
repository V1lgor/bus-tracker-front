import React from 'react';
import CloseButton from './CloseButton';

const Modal = (props) => {
  return (
    <div className='backdrop' onClick={props.closeModal}>
      <div className='modal'>
          <div className={'close-button-wrapper'}><CloseButton onClick={props.closeModal}/></div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
