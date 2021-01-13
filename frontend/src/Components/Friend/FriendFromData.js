import React from 'react';
import{FriendsStyle} from './style';

//img
import avatar from '../../assets/avatar.jpg'

const FriendsFromData =(props)=> {
    return(
        <div> 
             <FriendsStyle>
             <div className="friend-col">
                    <img src={props.avatar ? props.avatar: avatar} alt="albert"/>
                    <h1>{props.username}</h1>
                    <h5>{props.country}, {props.city}</h5>
                    <div className="btn-group">
                        <button>Follow</button>
                        <button>Add Friend</button>
                    </div>
                    <p>{props.about}</p>
                    <div className="friend-I-like"> 
                        <div className="groupOfTags">
                            
                        {props.hobby.map((like,index)=>
                            <div className="tag" key={index}>{like}</div>
                        )}
                                                    

                                                     
                        </div>
                        
                    </div>   
             </div>
             </FriendsStyle>                   
        </div>
    )
}

export default FriendsFromData;