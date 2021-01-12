import React from 'react';
import {PostStyled} from './style';
import {Link} from 'react-router-dom';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


const PostSearchBar =()=> {
    return(
        <div> 
            <PostStyled>
                <main className="main">
                    <div className="bp-main-header">
                        <div className="searching">
                            <div className="search-box">
                                <FontAwesomeIcon className="i" icon={faSearch} size = '1x'/> 
                                <input type="text" placeholder="Search posts ..."/>
                            </div>  
                        </div>
                        <div className="bp-main-search-links">
                            <Link className="link" to="#"><h3>Liked</h3></Link>
                            <Link className="link" to="#"><h3>Friends</h3></Link>
                            <Link className="link" to="#"><h3>Follow</h3></Link>
                        </div>          
                    </div>               
                </main>
            </PostStyled>
        </div>
    )
}

export default PostSearchBar;