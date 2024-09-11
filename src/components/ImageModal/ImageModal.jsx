// import { useState } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css'
import { useSearchContext } from '../../hooks/useSearchContext';

export const ImageModal = ( {images} ) => {

Modal.setAppElement('#root');

const { clickedId, handleModalClose, isOpen } =  useSearchContext();

// console.log(clickedId)

const modalImage = images.find((image) => image.id === clickedId);

// console.log(modalImage)
    return (
    <Modal isOpen= {isOpen} onRequestClose={handleModalClose} shouldCloseOnEsc={true} shouldCloseOnOverlayClick={true}>
        {isOpen && <div className={css.modal_image}> 
         <img className = {css.modal_poster} src={modalImage.urls.regular} alt={modalImage.alt_description}></img>
         <p>Author: {modalImage.user.name}</p>
         <p>Likes : {modalImage.likes}</p>
        </div>}
    </Modal>
    )
}
