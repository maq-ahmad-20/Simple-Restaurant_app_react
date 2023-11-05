import React from 'react'
import classes from './modal.module.css'
import ReactDOM from 'react-dom'

const BackDrop = (props) => {

    return <div className={classes.backdrop} onClick={props.onClose} ></div>
}

const ModalOverLay = (props) => {

    return <div className={classes.modal} >
        <div className={classes.content}>{props.children}</div>

    </div>
}
const Modal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, document.getElementById('overlays'))}
        </React.Fragment>
    )

}

export default Modal