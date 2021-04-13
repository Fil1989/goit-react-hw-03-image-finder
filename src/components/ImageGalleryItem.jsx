import PropTypes from "prop-types";

const ImageGalleryItem = ({ array, onModalOpen }) => {
  return (
    <>
      {array.map((element) => (
        <li key={element.id} className="ImageGalleryItem">
          <img
            src={element.webformatURL}
            alt={element.tags}
            className="ImageGalleryItem-image"
            onClick={onModalOpen}
          />
        </li>
      ))}
    </>
  );
};
ImageGalleryItem.propTypes = {
  array: PropTypes.array.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
