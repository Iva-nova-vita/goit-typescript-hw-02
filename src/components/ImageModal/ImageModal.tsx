import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

type ImageModalProps = {
  isModalOpen: boolean,
  closeModal: ()=>void,
  modalContent: {
    urls: {
      regular: string
    },
    alt_description: string
  }
}

export const ImageModal: React.FC<ImageModalProps> = ({isModalOpen, closeModal, modalContent})=> {
    return (
        <ReactModal
            isOpen={isModalOpen}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: '#20201fba',
              },
            }}
          >
            <img
              src={modalContent.urls.regular}
              alt={modalContent.alt_description}
            />
          </ReactModal>
    )
}