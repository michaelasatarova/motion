import React from 'react';
import {PostStyled} from './style';
import {Link} from 'react-router-dom';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare, faHeart} from '@fortawesome/free-solid-svg-icons';


const LikeAndShare =()=> {
    return(
        <div> 
            <PostStyled>
                <main>
                    <div className="like-and-share">
                        <Link href="#" className="like">
                            <FontAwesomeIcon className="i" icon={faHeart} size = '1x'/> 
                            <p>Like</p>
                        </Link>
                        <Link href="#" className="share">
                            <FontAwesomeIcon className="i" icon={faShare} size = '1x'/> 
                            <p>Share</p>
                        </Link>
                        <div className="count-of-likes">
                            <p> 10 Likes</p>
                        </div>               
                    </div>
                </main>
            </PostStyled>
        </div>
    )
}

export default LikeAndShare; 
 