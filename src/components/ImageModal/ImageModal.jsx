import Modal from 'react-modal';



const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
     backgroundColor: 'transparent',
    border: 'none',
  },
};

Modal.setAppElement('#root');


const ImageModal = ({ images, isOpen, onRequestClose }) => {
 

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <img src={images.regular} alt={images.alt} />
    </Modal>
  );
};

export default ImageModal;