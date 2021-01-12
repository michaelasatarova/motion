import React from 'react';
import {Link} from 'react-router-dom';
import {BlogPostGalleryStyle} from './style';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShare, faHeart} from '@fortawesome/free-solid-svg-icons';

//img
import jennifer from '../../assets/users/jennifer.png';
import image1 from '../../assets/feedPics/image1.png';
import image2 from '../../assets/feedPics/image2.png';
import image3 from '../../assets/feedPics/image3.png';
import image4 from '../../assets/feedPics/image4.png';



const BlogPostGallery =()=> {
    return(
        <div> 
            <BlogPostGalleryStyle>
            <div className="gallery-bp-post-section">

                <div className="gbps">
                    <div className="gallery-bp-user-data">
                        <img src={jennifer} alt=""/>
                        <div className="gallery-bp-user-name">
                            <h3>Jenifer Smith</h3>
                            <p>Just now</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eaque voluptate laborum ut?</p>
                    <div className="gallery-bp-post-gallery">
                        <img src={image1} alt=""/>
                        <img src={image2} alt=""/>
                        <img src={image3} alt=""/>
                        <img src={image4} alt=""/>
                    </div> 

                    <div className="bp-like-and-share">
                        <Link href="#" className="bp-like">
                            <FontAwesomeIcon className="i" icon={faHeart} size = '1x'/> 
                            <p>Like</p>
                        </Link>
                        <Link href="#" className="bp-share">
                            <FontAwesomeIcon className="i" icon={faShare} size = '1x'/> 
                            <p>Share</p>
                        </Link>
                        <div className="bp-count-of-likes">
                            <p> 10 Likes</p>
                        </div>               
                    </div>

                    </div>
                </div>
            </BlogPostGalleryStyle>
        </div>
    )
}

export default BlogPostGallery; 
