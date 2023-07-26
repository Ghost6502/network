import Avatars from './Avatars/Avatars'
import Description from './Description/Description'
import Posts from './MyPosts/MyPosts'
import classes from './Profile.module.css'


function Profile() {
    return (
        <main>
            <Avatars />
            <div className={classes.information}>
                <Description />
                <Posts />
            </div>
        </main>
    );
}

export default Profile;