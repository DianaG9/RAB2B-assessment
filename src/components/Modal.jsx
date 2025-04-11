import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className="modal__trigger" onClick={openModal} aria-label="Help">
        <FontAwesomeIcon icon={faCircleQuestion} size="2x" />
      </button>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__overlay"></div>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>
            <h2 className="modal__title">Want a hint?</h2>
            <p className="modal__text">
              Try clicking and moving the laptop!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;