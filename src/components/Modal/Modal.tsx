import React, { MouseEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { PhotoPreview } from '../../types/Photo';
import './Modal.scss';

type Props = {
  onClose: () => void;
  modalImage: PhotoPreview | null;
};

export const Modal: React.FC<Props> = ({ onClose, modalImage }) => {
  const mouseDownClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const keyDownClose = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keyDownClose);

    return () => {
      window.removeEventListener('keydown', keyDownClose);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div className="overlay" onClick={mouseDownClose}>
      <div className="popup">
        <img
          style={{
            width: '100%',
            height: '100%',
          }}
          src={modalImage?.urls.regular}
          alt="#"
        />
        <div className="image-info">
          <p>{modalImage?.description}</p>
          <p>{modalImage?.created_at}</p>
        </div>
      </div>
    </div>,
    document.querySelector('#modal-root') as Element,
  );
};
