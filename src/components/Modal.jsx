const Modal = ({ imageSrc, alt, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={imageSrc} alt={alt} />
      </div>
    </div>
  );
};
export default Modal;
