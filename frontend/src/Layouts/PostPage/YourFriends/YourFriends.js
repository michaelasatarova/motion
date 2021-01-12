import React from 'react';
import PostHeader from '../../../Components/PostHeader/PostHeader';
import ProfileAccount from '../../../Components/ProfileAccount/ProfileAccount';
import Friend from '../../../Components/Friend/Friend';
import {ProfileBg, ProfileBg2} from  '../Profile/style';
import {YourFrienndsStyle} from  './style';




const YourFriends =()=> {
    return(
        <div> 
             <PostHeader/>
             <ProfileBg/>
             <ProfileBg2>
                <ProfileAccount/>
                <YourFrienndsStyle>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    
                </YourFrienndsStyle>
            </ProfileBg2>
             
        </div>
    )
}

export default YourFriends;