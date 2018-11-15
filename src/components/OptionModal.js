import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}
    onRequestClose={props.hideModal}
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button
      onClick={props.hideModal}
    >
      OK
    </button>
  </Modal>
)

export default OptionModal;
