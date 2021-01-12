import React from 'react';
import {PostStyled} from './style';
import {Link} from 'react-router-dom';

// Img
import Logo from '../../assets/favicon.png';
import Posts from '../../assets/posts_logo.png';
import User from '../../assets/michaela.jpg';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBell, faBars} from '@fortawesome/free-solid-svg-icons';



const MotionHome =()=> {
    return(
        
            <PostStyled>
                <header className="blog-post-header">
                    
                    <div className="bp-h-left">                      
                        <Link to="/">
                            <div className="bp-h-left-con">                    
                                <img className="Logo" src={Logo} alt="" />
                                <h2>Motion</h2>
                            </div>
                       </Link>

                       <Link to="/motionhome">
                            <div className="bp-h-left-con">
                                <img src={Posts} alt=""/>
                                <h3>Post</h3>  
                            </div>    
                        </Link>

                        <Link to="/findfriends">                                         
                            <div className="bp-h-left-con">                          
                                <FontAwesomeIcon className="i" icon={faUserFriends} size = '1x'/>
                                <h3>Add friends</h3>
                            </div>
                        </Link>                       
                    </div>           
                   

                    <div className="bp-h-right">                      
                        <div className="bp-h-right-con">
                        <FontAwesomeIcon className="i" icon={faBell} size = '1x'/><sup>3</sup>              
                        </div>
                       
                        <Link to="/profile">
                            <img src={User} alt=""/>
                        </Link>  
                       
                        <div className="bp-h-right-con">
                            <FontAwesomeIcon className="i" icon={faBars} size = '1x'/> 
                        </div>                                             
                    </div>

                </header>
            </PostStyled>
        
    )
}

export default MotionHome