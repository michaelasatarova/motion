import React from 'react';
import {PostStyled} from './style';
import LikeAndShare from './LikeAndShare';

//img
import jennifer from '../../assets/users/jennifer.png';
import image1 from '../../assets/feedPics/image1.png';
import image2 from '../../assets/feedPics/image2.png';
import image3 from '../../assets/feedPics/image3.png';
import image4 from '../../assets/feedPics/image4.png';



const UserPost =()=> {
    return(
        <div> 
            <PostStyled>
            <div className="">

                <div className="nw">
                    <div className="user-data">
                        <img src={jennifer} alt=""/>
                        <div className="bp-user-name">
                            <h3>Jenifer Smith</h3>
                            <p>Just now</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut?</p>
                    <div className="post-gallery">
                        <img src={image1} alt=""/>
                        <img src={image2} alt=""/>
                        <img src={image3} alt=""/>
                        <img src={image4} alt=""/>
                    </div>                
                    <LikeAndShare/>
                    </div>
                </div>
            </PostStyled>
        </div>
    )
}

export default UserPost; 