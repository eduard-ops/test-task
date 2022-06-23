import modalPng from '../../images/modal-n.png';

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
