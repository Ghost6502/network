import Avatar from '../../../../imgs/avatar.png'
import classes from './Post.module.css'

function Post(props) {
    return (
        <div className={classes.post}>
            <img src={Avatar} alt="User" />
            <h5>{props.message}</h5>
        </div>
    )
}

export default Post;