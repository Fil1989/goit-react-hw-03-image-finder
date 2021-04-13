import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ array, onModalOpen }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem array={array} onModalOpen={onModalOpen} />
    </ul>
  );
};
ImageGallery.propTypes = {
  array: PropTypes.array.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};
export default ImageGallery;
