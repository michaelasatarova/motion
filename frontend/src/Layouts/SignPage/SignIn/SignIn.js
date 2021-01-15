import React, {Component} from "react";
import { Link } from 'react-router-dom';
import MotionLeft from '../../../Components/MotionLeft';
import {SectionStyled, StyleRow } from './styles';
import baseUrl from '../../../Helpers/BaseUrl';

//STORE
import { connect } from "react-redux";
import { authAction } from "../../../Store/actions/auth";


//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';


class SignIn extends Component{
    constructor() {
        super();
    
        this.state = {
          email: "",
          password: "",
          emailError: "",
          passwordError:"",
        };
      }


      handlePassword = (event) => {
        this.setState({ password: event.target.value });
      };
    
      handleemail = (event) => {
        this.setState({ email: event.target.value });
      };

      // handleChange = event =>{
      //   const isCheckbox = event.target.type === "email";

      //   this.setState({
      //     [event.target.name]: isCheckbox ?
      //     event.target.checked
      //     :event.target.value
      //   });
      // };
      
      //validation
      validation =()=>{
        let emailError
        //let passwordError

         //email validation
            if(!this.state.email.includes('@')){
              emailError = "invalid Email";
            }else if (!this.state.email) {
              emailError = "email cannot be blank";
            }else{
              emailError = "invalid email";
            }

            //channging state in constructor 
            if(emailError){
              this.setState({emailError});
              return false;
            }
            return true;
          };



      //sending form
       handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validation();
        let emailError;
        
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(emailError);
        }
  
        // send email and password to api
        const { password } = this.state;
        const config = {
          body: JSON.stringify({ email: this.state.email, password }),
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        };
        fetch(`${baseUrl}/backend/api/auth/token/`, config)
          .then((res) => res.json())
          // retrieve token from api response
          .then((data) => {
            // set the token to redux
            this.props.dispatch(authAction(data.access));
            // set token to localstorage
            localStorage.setItem("token", data.access);
            this.props.history.push('/motionhome');
          });        
      };
 

    render(){
        console.log("in the render", this.props);
    return (

            <StyleRow >
              
                <MotionLeft/>
                <SectionStyled>
                  
                <div className="right">
                    <div className="header">
                        <p>Don´t have an account?</p>
                        <Link to="/signup"><button>Sign UP</button></Link>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Sign In</h1>
                        <label className="name">
                            <FontAwesomeIcon className="i" icon={faUserCircle} size = '1x'/>
                            <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleemail}/>
                            {this.state.emailError ?<p>{this.state.emailError}</p> : null}
              
                        </label>
                        <label className="password">
                            <FontAwesomeIcon className="i" icon={faLock} size = '1x'/>
                            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/> 
                            {this.state.emailError ?<p>{this.state.passwordError}</p>: null}           
                        </label>
                    </form>
                    <div className='toMotion'><Link to="/motionhome"><button className="signin" onClick={this.handleSubmit}>Sign In</button></Link></div>
                </div>
                </SectionStyled>

            </StyleRow>
        )}
};
const mapStateToProps = (state) => {
    return {
      token: state.token,
    };
  };

export default connect(mapStateToProps)(SignIn);
