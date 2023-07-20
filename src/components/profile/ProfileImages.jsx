import Header from '../../imgs/profile-header.jpeg'
import Avatar from '../../imgs/avatar.png'


function ProfileImages() {
    return (
        <div className="profile__images-wrapper">
            <img className="profile__avatar" src={Avatar} alt="" width={128} height={128}/>
            <img className="profile__header" src={Header} alt="" height={128}/>
        </div>
    );
}

export default ProfileImages