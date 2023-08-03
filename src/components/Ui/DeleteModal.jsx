import React, {Fragment} from 'react';
import Card from './Card';
import Button from './Button';
import classes from "./ErrorModal.module.css"



const DeleteModal = (props) => {

    return (
        <Fragment>
            <div className={classes.backdrop}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <main className={classes.content}>
                    <p style={{fontSize: "22px"}}>{props.message}</p>
                </main>
                <footer className={classes.actions}>
                    <Button  onClick={props.onClick}>да</Button>
                    <Button onClick={props.notHandler}>нет</Button>
                </footer>
            </Card>
        </Fragment>
    );
};


export default DeleteModal;