import React from "react";
import { Link } from 'react-router-dom';
import MotionLeft from '../../../Components/MotionLeft';
import {SectionStyled, StyleRow } from './styles';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faRegCircle} from '@fortawesome/free-regular-svg-icons';


const SignUp = () =>{
  
    
    return (

            <StyleRow >
                <MotionLeft/>
                <SectionStyled>
                <div className="right">
                    <div className="header">
                        <p>Already have an account?</p>
                        <Link to="/"><button>Sign In</button></Link>
                    </div>
                    <main>
                        <h1>Sign Up</h1>
                        <div className="name">
                            <FontAwesomeIcon className="i" icon={faEnvelope} size = '1x'/>                           
                            <input type="email" placeholder="Email"/>
                        </div>
                    </main>
                    <button className="signup">Sign Up</button>
                    <div className="progress-dots">
                        <FontAwesomeIcon className="i" icon={faCircle} size = '1x'/>  
                        <FontAwesomeIcon className="i" icon={faRegCircle} size = '1x'/> 
                        <FontAwesomeIcon className="i" icon={faRegCircle} size = '1x'/> 
                    </div>  
                </div>
                </SectionStyled>
            </StyleRow>
        )
};

export default SignUp;