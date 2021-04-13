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
export default ImageGalleryItem;
