import React from 'react';
import{FriendsStyle} from './style';

//img
import alber from '../../assets/users/alber.png'

const FindFriends =()=> {
    return(
        <div> 
             <FriendsStyle>
             <div className="friend-col">
                    <img src={alber} alt="albert"/>
                    <h1>Albert Lawrence</h1>
                    <h5>Zurich, Switzerland</h5>
                    <div className="btn-group">
                        <button>Follow</button>
                        <button>Add Friend</button>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <div className="friend-I-like"> 
                        <div className="groupOfTags">
                            <div className="tag">Traveling </div>
                            <div className="tag">Reading </div>
                            <div className="tag">Running </div>  
                            <div className="tag">Swimming </div>
                            <div className="tag">Cooking </div>                                                   
                        </div>
                        
                    </div>   
             </div>
             </FriendsStyle>                   
        </div>
    )
}

export default FindFriends;