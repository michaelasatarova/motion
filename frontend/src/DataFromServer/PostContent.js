import React from 'react';
import {DataFetchPostsSectionStyled, LikeAndShareStyled } from './style';

//img
import avatar from '../assets/avatar.jpg';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare, faHeart} from '@fortawesome/free-solid-svg-icons';


const PostContent =(props)=> {
    return(
        <DataFetchPostsSectionStyled >

            <div className= "postHeader">
                <img src={avatar} alt=""/>
                <div className= "created">             
                    <h1> {props.user} </h1>
                    <p>{props.created} </p>              
                </div>
            </div>
                                       
            <div className= "postContent">             
                {props.content} 
            </div>
            <LikeAndShareStyled>
                <main>
                    <div className="like-and-share">
                        <div className="like" >
                            <FontAwesomeIcon className="i" icon={faHeart} size = '1x'/> 
                            <p>Like</p>
                        </div>
                        <div className="share">
                            <FontAwesomeIcon className="i" icon={faShare} size = '1x'/> 
                            <p>Share</p>
                        </div>
                        <div className="count-of-likes">
                             <p>Likes {props.likes}</p>
                        </div>   
                        <div className="count-of-likes">
                             <p>Shared {props.shared}</p>
                        </div>            
                    </div>
                </main>
            </LikeAndShareStyled>

            
       </DataFetchPostsSectionStyled>
    )
}

export default PostContent;