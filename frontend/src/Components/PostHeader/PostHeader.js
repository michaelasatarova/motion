import React, {useState} from 'react';
import {PostStyled} from './style';
import {Link, useHistory} from 'react-router-dom';
  

// Img
import Logo from '../../assets/favicon.png';
import Posts from '../../assets/posts_logo.png';
import User from '../../assets/michaela.jpg';
import Jeniffer from '../../assets/users/jennifer.png';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faBell, faBars, faUser, faSignOutAlt, faCheckCircle, faTimesCircle, faClock} from '@fortawesome/free-solid-svg-icons';



const MotionHome =()=> {
 const[collapse,setCollapse] = useState(false)
 const[collapseNotification,setCollapseNotification] = useState(false)
const history = useHistory()

const Logout =()=>{
     localStorage.clear();
     history.push('/')
 }
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
                        <div className="bp-h-right-con" onClick={()=>{setCollapseNotification(prev=> !prev)}}>
                        <FontAwesomeIcon className="i" icon={faBell} size = '1x'/><sup>3</sup>              
                        </div>

                        {collapseNotification === true ?
                        <div className="toggle-notification-btn">
                            <h1>Received Request</h1>
                            <div className="received-requests">
                                <div className="received-from-user">
                                    <img src={User} alt=""/>
                                    <div className="received-from-user-data">
                                        <h2>Name</h2>
                                        <h3>Address</h3>
                                    </div>
                                </div>
                                <div className="accept-or-deny">
                                    <FontAwesomeIcon className="i checkCircle" icon={faCheckCircle} size = '2x' /> 
                                    <FontAwesomeIcon className="i" icon={faTimesCircle} size = '2x' />             
                                </div>
                            </div>
                            <h1>Sent Request</h1>
                            <div className="received-requests">
                                <div className="received-from-user">
                                    <img src={Jeniffer} alt=""/>
                                    <div className="received-from-user-data">
                                        <h2>Name</h2>
                                        <h3>Address</h3>
                                    </div>
                                </div>
                                <div className="accept-or-deny">
                                    <FontAwesomeIcon className="i" icon={faClock} size = '2x' /> 
                                </div>
                            </div>
                        </div>: null
                         } 
                       
                        <Link to="/profile">
                            <img src={User} alt=""/>
                        </Link>  
                       
                        <div className="bp-h-right-con" onClick={()=>{setCollapse(prev=> !prev)}}>
                            <FontAwesomeIcon className="i" icon={faBars} size = '1x' /> 
                        </div>    
                        
                        {collapse === true ?
                        <div className="toggle-menu-btn">
                            <nav>                              
                                <Link to="/profile">
                                    <div className="profile-menu-nav">
                                        <FontAwesomeIcon className="i" icon={faUser} size = '1x'/>
                                        <p>Profile</p> 
                                    </div>
                                </Link>                                                
                                <div type ="button" className="btn-menu-nav" >
                                    <FontAwesomeIcon className="i" icon={faSignOutAlt} size = '1x'/>
                                    <p onClick={()=>Logout()}>Logout</p> 
                                </div>
                            </nav>
                        </div>  : null
                         }                                       
                    </div>

                </header>
            </PostStyled>
        
    )
}

export default MotionHome