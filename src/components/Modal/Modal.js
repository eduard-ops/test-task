import modalPng from '../../images/modal-n.png';

import PropTypes from 'prop-types';

export default function Modal({ text }) {
  return (
    <div className="backdrop">
      <div className="modal">
        <img className="modal__image" src={modalPng} alt="norris" />
        <p className="modal__text">{text}</p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  text: PropTypes.string,
};
