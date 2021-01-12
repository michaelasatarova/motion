import React from 'react';
import PostHeader from '../../../Components/PostHeader/PostHeader';
import ProfileAccount from '../../../Components/ProfileAccount/ProfileAccount';
import BlogPostGallery from '../../../Components/BlogPost/BlogPostGallery';
import {AccountProfileStyled, ProfileBg, ProfileBg2} from  './style';




const Profile =()=> {
    return(
        <div> 
             <PostHeader/>
             <ProfileBg/>
             <ProfileBg2>
                <ProfileAccount/>
                <AccountProfileStyled>
                    
                        <BlogPostGallery/>
                    
                        <BlogPostGallery />
                    
                </AccountProfileStyled>
            </ProfileBg2>
             
        </div>
    )
}

export default Profile;