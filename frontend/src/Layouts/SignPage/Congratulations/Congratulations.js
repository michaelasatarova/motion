import React from "react";
import MotionLeft from '../../../Components/MotionLeft';
import {SectionStyled, StyleRow } from './styles';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faRegCircle} from '@fortawesome/free-regular-svg-icons';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';



const Congratulations = () =>{   
    return (
            <StyleRow >
                <MotionLeft/>
                <SectionStyled>
                <div className="right">
                    <main>
                        <h1>Congratulations</h1>
                        <FontAwesomeIcon className="done" icon={faCheckCircle} size = '6x'/>  
                        <div className="name">
                            <p>We sent information code to your email <span> johnsmith@gmail.com</span></p>
                        </div>
                    </main>
                    <button className="signup">Continue</button>
                    <div className="progress-dots">
                        <FontAwesomeIcon className="i" icon={faRegCircle} size = '1x'/>  
                        <FontAwesomeIcon className="i" icon={faCircle} size = '1x'/> 
                        <FontAwesomeIcon className="i" icon={faRegCircle} size = '1x'/> 
                    </div>  
                </div>
                </SectionStyled>
            </StyleRow>
        )
};

export default Congratulations;