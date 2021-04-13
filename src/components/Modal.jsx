import PropTypes from "prop-types";

const Modal = ({ imageSrc, alt, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={imageSrc} alt={alt} />
      </div>
    </div>
  );
};
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Modal;
