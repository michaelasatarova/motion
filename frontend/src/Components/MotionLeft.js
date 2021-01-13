import React from "react";
import {StyledMotion} from './style';
import Logo from '../assets/logo.png'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple, faGooglePlay, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';



const MotionLeft = (props) =>{ 
    return (
       <StyledMotion>
        <div className="left">
                <div className="purple-layer"></div>
                <header>
                    {/* <img src={Logo} alt="Motion Logo"/> */}
                    <h1>Motion</h1>
                    
                </header>
                <section>
                    <div className="idea">
                        <p>Conect with friends and the world aroud you with Motion</p>
                    </div>
                
                <div className="download-btns">
                       <a href="https://www.apple.com/shop"><button><FontAwesomeIcon className="i" icon={faApple} size = '1x'/>App Store</button></a>
                       <a href="https://play.google.com"><button><FontAwesomeIcon className="i" icon={faGooglePlay} size = '1x'/>Google Play</button></a>
                </div>
                </section>
                <footer>
                    <div className="icons">
                    <a href="https://www.twitter.com"><FontAwesomeIcon className="social-ico" icon={faTwitter} size = '1x'/></a>
                    <a href="https://www.facebook.com"><FontAwesomeIcon className="social-ico" icon={faFacebook} size = '1x'/></a>
                    <a href="https://www.instagram.com"><FontAwesomeIcon className="social-ico" icon={faInstagram} size = '1x'/></a>
                    </div>
                    <p>© Motions 2020 All Rights reserved</p>
                </footer>
         </div>        
    </StyledMotion>
        )
};

export default MotionLeft;
