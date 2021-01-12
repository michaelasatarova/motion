import React from "react";
import MotionLeft from '../../../Components/MotionLeft';
import {SectionStyled, StyleRow } from './style';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faRegCircle} from '@fortawesome/free-regular-svg-icons';

const Verification = (props) =>{
  
    
    return (

            <StyleRow >
                <MotionLeft/>
                <SectionStyled>
                <div className="right">                  
                    <main>
                        <h1>Verification</h1>
                            <form>
                                <div className="name">                                   
                                    <input type="text" placeholder="Validation Code"/>  
                                </div>
                              
                               <div className="container"> 
                                    <div className="name">                                  
                                        <input type="email" placeholder="Email"/>
                                    </div>

                                    <div className="name">                                    
                                        <input type="text" placeholder="User Name"/>
                                    </div>
                                </div>

                                <div className="container"> 
                                    <div className="name">                                  
                                        <input type="text" placeholder="First Name"/>
                                    </div>

                                    <div className="name">                                    
                                        <input type="text" placeholder="Last Name"/>
                                    </div>
                                </div>

                                <div className="container"> 
                                    <div className="password">                                  
                                        <input type="password" placeholder="Password"/>
                                    </div>

                                    <div className="password">                                    
                                        <input type="password" placeholder="Password repeat"/>
                                    </div>
                                </div>
                        </form>
                    </main>
                    <button className="signin">Complete</button>
                    <div className="progress-dots">                        
                        <FontAwesomeIcon className="i" icon={faRegCircle} size = '1x'/> 
                        <FontAwesomeIcon className="i" icon={faRegCircle} size = '1x'/> 
                        <FontAwesomeIcon className="i" icon={faCircle} size = '1x'/> 
                    </div>
                </div>
                </SectionStyled>
            </StyleRow>
        )
};

export default Verification;
