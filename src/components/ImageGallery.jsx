import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ array, onModalOpen }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem array={array} onModalOpen={onModalOpen} />
    </ul>
  );
};
export default ImageGallery;
