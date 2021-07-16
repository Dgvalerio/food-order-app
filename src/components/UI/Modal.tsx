import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop: FC = () => <div className={classes.backdrop} />;

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
}: {
  children: React.ReactElement | React.ReactElement[];
}): JSX.Element => (
  <>
    {portalElement && ReactDOM.createPortal(<Backdrop />, portalElement)}
    {portalElement &&
      ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalElement)}
  </>
);

export default Modal;
