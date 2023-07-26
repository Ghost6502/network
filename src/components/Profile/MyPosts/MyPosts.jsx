import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <textarea placeholder='Write new post' required></textarea>
            <button>Add new post</button>
            <Post message='Hello! You are in my page.' />
            <Post message='How are you?' />
        </div>
    );
}

export default MyPosts;