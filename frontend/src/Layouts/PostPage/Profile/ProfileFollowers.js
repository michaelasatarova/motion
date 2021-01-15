import React from 'react';
import PostHeader from '../../../Components/PostHeader/PostHeader';
import ProfileAccountFollowers from '../../../Components/ProfileAccount/ProfileAccountFollowers';
import { ProfileBg, ProfileBg2} from  './style';




const ProfileFollowers =()=> {
    return(
        <div> 
             <PostHeader/>
             <ProfileBg/>
             <ProfileBg2>
                <ProfileAccountFollowers/>
            </ProfileBg2>
             
        </div>
    )
}

export default ProfileFollowers;