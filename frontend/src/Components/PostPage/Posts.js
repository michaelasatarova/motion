import React from 'react';
import {PostStyled} from './style';
import LikeAndShare from './LikeAndShare';
import UserPost from './UserPost';

//img
import jennifer from '../../assets/users/jennifer.png';
import patricia from '../../assets/users/patricia.png';
import alber from '../../assets/users/alber.png';

import LargeImage from '../../assets/feedPics/large_image.png';

import SendBTN from '../../assets/send-btn.png';


const Posts =()=> {
    return(
        <div> 
            <PostStyled>
               <main>
               <div className="bp-post-section">
                    <div className="bp-posts">
                        <img src={jennifer} alt=""/>
                        <input type="text" placeholder="What is on your mind Jenifer?"/>
                        <div className="send-btn">
                            <div type="button" className="btn"><img src={SendBTN} alt="" width="40px" /></div>
                        </div>
                    </div>

                    <div className="user-post">
                        <div className="user-data">
                            <img src={patricia} alt=""/>
                            <div className="bp-user-name">
                                <h3>Patricia Jindal</h3>
                                <p>6h ago</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut? Necessitatibus reiciendis delectus consequuntur, beatae laboriosam, quaerat ipsam, animi fugiat dignissimos iusto modi dolore temporibus quasi!</p>
                       <LikeAndShare/>
                    </div>

                    <div className="user-post">
                        <UserPost/>
                    </div>
                    
                    <div className="user-post">
                        <div className="user-data">
                            <img src={alber} alt=""/>
                            <div className="bp-user-name">
                                <h3>Albert Lawrance</h3>
                                <p>June 20</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut? Necessitatibus reiciendis delectus consequuntur, beatae laboriosam, quaerat ipsam, animi fugiat dignissimos iusto modi dolore temporibus quasi!</p>
                        <div className="shared-post">
                            <hr/>
                            <div className="user-post">
                                <div className="user-data">
                                    <img src={patricia} alt=""/>
                                    <div className="bp-user-name">
                                        <h3>Patricia Jindal</h3>
                                        <p>6h ago</p>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut?</p>
                                <img src={LargeImage} alt=""/> 
                            </div>                  
                        </div>                
                        <LikeAndShare/>
                    </div>

                    <div className="user-post">
                        <div className="user-data">
                            <img src={patricia} alt=""/>
                            <div className="bp-user-name">
                                <h3>Patricia Jindal</h3>
                                <p>6h ago</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut? Necessitatibus reiciendis delectus consequuntur, beatae laboriosam, quaerat ipsam, animi fugiat dignissimos iusto modi dolore temporibus quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut? Necessitatibus reiciendis delectus consequuntur, beatae laboriosam, quaerat ipsam, animi fugiat dignissimos iusto modi dolore temporibus quasi!</p>
                       <p>Lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut? Necessitatibus reiciendis delectus </p>
                       
                       <LikeAndShare/>
                    </div>

                    </div> 
                 </main>
            </PostStyled>
        </div>
    )
}

export default Posts;