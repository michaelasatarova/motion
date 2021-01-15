import React from 'react';
import PostHeader from '../../../Components/PostHeader/PostHeader';
import ProfileAccountFriends from '../../../Components/ProfileAccount/ProfileAccountFriends';
import { ProfileBg, ProfileBg2} from  './style';




const ProfileFriends =()=> {
    return(
        <div> 
             <PostHeader/>
             <ProfileBg/>
             <ProfileBg2>
                <ProfileAccountFriends/>
            </ProfileBg2>
             
        </div>
    )
}

export default ProfileFriends;