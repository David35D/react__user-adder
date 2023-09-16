import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

/* 
    The component is split up into 3 components so that it's easier to work with portals.
    The components are also kept in the same file because we will only use them in togheter in this app.
*/

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>
};

const ModalOverlay = (props) => {
    return (    
        <Card className={classes.modal}>
            <div className={classes.header}>
                <h2>{props.title}</h2>
            </div>
            <div className={classes.content}>
                <p>{props.content}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Confirm</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title}
                    content={props.content}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </>
    );
};

export default ErrorModal;