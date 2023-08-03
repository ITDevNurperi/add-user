import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from "./ErrorModal.module.css"

const Backdrop = (props) => {
    return  <div className={classes.backdrop} onClick={props.onClick}/>
}

const ModalOverlay = (props) => {
    return (
        <Fragment>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <main className={classes.content}>
                    <p style={{fontSize: "22px"}}>{props.message}</p>
                </main>
                <footer className={classes.actions}>
                    <Button onClick={props.onClick}>OK</Button>
                </footer>
            </Card>
        </Fragment>
    );
};

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
            <Backdrop onClick={props.onClick}/>,
            document.getElementById("beckdrop-root")
            )}

            {ReactDOM.createPortal(
            <ModalOverlay 
            title={props.title} 
            message={props.message} 
            onClick={props.onClick}/>,
            document.getElementById("modal-root")
            )}
        </Fragment>
    )
}

export default ErrorModal;