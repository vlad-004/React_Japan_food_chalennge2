import styles from './Modal.module.css';
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={styles.backdrop}></div>
};

const ModalWindow = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>

};
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <React.Fragment>
        {/*<Backdrop/>*/}
        {ReactDOM.createPortal(<Backdrop/>, portalElement)}
        {ReactDOM.createPortal(<ModalWindow> {props.children} </ModalWindow>, portalElement)}
        <ModalWindow>
            {props.children}
        </ModalWindow>
    </React.Fragment>
};

export default Modal;
