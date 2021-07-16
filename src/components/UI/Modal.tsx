import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = ({ onClose }: { onClose: () => void }): JSX.Element => (
  <div className={classes.backdrop} onClick={onClose} />
);

const Overlay = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}): JSX.Element => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

const portalElement = document.getElementById('overlays');

const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactElement | React.ReactElement[];
  onClose: () => void;
}): JSX.Element => (
  <>
    {portalElement &&
      ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
    {portalElement &&
      ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalElement)}
  </>
);

export default Modal;
