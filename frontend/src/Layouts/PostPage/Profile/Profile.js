import React from 'react';
import PostHeader from '../../../Components/PostHeader/PostHeader';
import ProfileAccount from '../../../Components/ProfileAccount/ProfileAccount';
import { ProfileBg, ProfileBg2} from  './style';




const Profile =()=> {
    return(
        <div> 
             <PostHeader/>
             <ProfileBg/>
             <ProfileBg2>
                <ProfileAccount/>
            </ProfileBg2>
             
        </div>
    )
}

export default Profile;