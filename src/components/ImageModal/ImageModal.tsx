import { Image } from "../App/App.types";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  image: Image | null;
  onCloseModal: () => void;
}

const ImageModal = ({ isOpen, image, onCloseModal }: ImageModalProps) => {
  if (!image) {
    return null; 
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeButton} onClick={onCloseModal}>X</button>
      <div className={css.imageWrapper}>
        <img src={image.urls?.regular} alt={image.alt_description} className={css.image} />
      </div>
      <p>{image.alt_description || "No description available"}</p>
    </Modal>
  );
};

export default ImageModal;