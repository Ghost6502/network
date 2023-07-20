import ProfileImages from './profile/ProfileImages'
import ProfileDescription from './profile/ProfileDescription'
import ProfilePosts from './profile/ProfilePosts'


function Profile() {
    return (
        <main className="profile">
            <ProfileImages />
            <div className="profile__information">
                <ProfileDescription />
                <ProfilePosts />
            </div>
        </main>
    );
}

export default Profile;