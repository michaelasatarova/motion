import React from 'react';
import PostHeader from '../../../Components/PostHeader/PostHeader';
import { ProfileBg, ProfileBg2} from  '../Profile/style';
import{EditProfileStyle} from './style';

//img
import jennifer from '../../../assets/users/jennifer.png';

const EditAccount =()=> {
    return(
        <div> 
             <PostHeader/>
             <ProfileBg/>
             <ProfileBg2/>
             <EditProfileStyle>
             <div className= "profile"> 
                    <div className= "profile-person"> 
                        <img src={jennifer} alt ="jennifer"/>
                        <button>Updte Image</button>
                        <div className= "btn-GP">
                            <button>Delete Account</button>
                             <button>Save</button>
                        </div>
                        
                    </div>

                    <div className= "profile-data"> 

                        <div className= "personal-info-edit"> 
                            <div className= "form-group"> 
                                <label>First Name</label>
                                <input type="text" placeholder="First Name ..."/>
                            </div>
                            <div className= "form-group"> 
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name ..."/>
                            </div>
                            <div className= "form-group"> 
                                <label>Email</label>
                                <input type="email" placeholder="@"/>
                            </div>
                            <div className= "form-group"> 
                                <label>User Name</label>
                                <input type="text" placeholder="User Name ..."/>
                            </div>
                            <div className= "form-group"> 
                                <label>Location</label>
                                <input type="text" placeholder="Location ..."/>
                            </div>
                            <div className= "form-group"> 
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Phone number ..."/>
                            </div>
                            <div className= "form-group"> 
                                <label>About</label>
                                <textarea rows="2" cols="50"/>
                            </div>
                            <div className= "form-group"> 
                                <label>Password</label>
                                <input type="password" placeholder="Password ..."/>
                            </div>                        
                        </div>

                        <div className="ea-I-like"> 
                            <h5>Things I like</h5>
                                <div className="groupOfTags">
                                    <div className="tag">Swimming <strong>X</strong></div>
                                    <div className="tag">Cooking <strong>X</strong></div>
                                    <div className="tag">Traveling <strong>X</strong></div>
                                    <div className="tag">Reading <strong>X</strong></div>
                                    <div className="tag">Running <strong>X</strong></div>                            
                                </div>

                            <div className= "form-group">  
                                <input type="text" placeholder="Type something..."/>
                                <button type="submit">Submit</button>
                            </div>

                        </div> 
                        
                    </div>
                </div>

             </EditProfileStyle>
             
             
        </div>
    )
}

export default EditAccount;