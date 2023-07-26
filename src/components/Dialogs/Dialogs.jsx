import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'


function DialogItem(props) {
    let path = '/messages/' + props.id;

    return <NavLink to={path} className={({ isActive }) => isActive ? classes.active : ''}>{props.name}</NavLink>
}


function Message(props) {
    return <h4 className={classes.message}>{props.message}</h4>
}


function Dialogs() {
    return (
        <main className={classes.dialogs}>
            <div className={classes.contacts}>
                <DialogItem name='Nikita' id='1' />
                <DialogItem name='Andrew' id='2' />
                <DialogItem name='Mark' id='3' />
                <DialogItem name='Aleksey' id='4' />
                <DialogItem name='Roman' id='5' />
            </div>
            <div className={classes.dialog}>
                <Message message='Hi!' />
                <Message message='How are you?' />
                <Message message='Did you hear last news?' />
            </div>
        </main>
    )
}

export default Dialogs;