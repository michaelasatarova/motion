import React from 'react';
import PostHeader from '../../../Components/PostHeader/PostHeader';
import ProfileAccountFollowees from '../../../Components/ProfileAccount/ProfileAccountFollowees';
import { ProfileBg, ProfileBg2} from  './style';




const ProfileFollowees =()=> {
    return(
        <div> 
             <PostHeader/>
             <ProfileBg/>
             <ProfileBg2>
                <ProfileAccountFollowees/>
            </ProfileBg2>
             
        </div>
    )
}

export default ProfileFollowees;