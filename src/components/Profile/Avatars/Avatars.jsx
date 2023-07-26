import Header from '../../../imgs/profile-header.jpeg'
import Avatar from '../../../imgs/avatar.png'
import classes from './Avatars.module.css'


function ProfileImages() {
    return (
        <div className={classes.wrapper}>
            <img className={classes.avatar} src={Avatar} alt="" width={128} height={128}/>
            <img className={classes.header} src={Header} alt="" height={128}/>
        </div>
    );
}

export default ProfileImages