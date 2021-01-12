import React, { Component } from 'react';
import {ProfileStyled} from './style';
import { Link } from 'react-router-dom';
import {UserAccount} from '../../Store/actions/UserAccount';
import {connect} from 'react-redux';

//img
 import michaela from '../../assets/michaela.jpg'


class ProfileAccount extends Component {
    constructor() {
        super();  
        this.state = {
            email: "michaela.satarova.ml@gmail.com"	,
            first_name: "Michaela",	
            last_name: 'Šatarova',	
            username: 'Michaela',
            job: 'student',
            avatar: michaela,
            location: 'Gersau, Switzerland'	,
            about_me: 'Finishing university and getting some Masters degree was never my priority. Instead I decided to go my own way. The self-study way. Even though it wasn’t the easiest way, I know it was the best choice for me. I am very interested in the latest technologies, motion graphics, animation and how things pull together. I passed several certificate courses and in the end I said to myself, “Wow! That’s it!!!” ',
            things_user_likes: ['swimming', 'riding', 'coding', 'eating', 'sleeping']   
        };
      } 
   
      componentDidMount = () => {
      const config = {
        body: JSON.stringify({
             email: this.state.email,
             first_name: this.state.first_name,
             last_name: this.state.last_name,
             username: this.state.username,
             job:this.state.job,
             avatar:this.state.avatar,
             location:this.state.location,
             about_me: this.state.about_me,
             things_user_likes: this.state.things_user_likes
            }),
        method: "PUT",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.props.token}`
        }),
      };
      fetch("https://motion.propulsion-home.ch/backend/api/users/me/", config)
        .then((res) => res.json())  
        .then((data)=>{console.log(data)
            this.props.dispatch(UserAccount())
            this.setState({ email: "michaela.satarova.ml@gmail.com"	,
                            first_name: "Michaela",	
                            last_name: 'Šatarova',	
                            username: 'Michaela',
                            job: 'student',
                            avatar: michaela,
                            location: 'Gersau, Switzerland'	,
                            about_me: 'Finishing university and getting some Masters degree was never my priority. Instead I decided to go my own way. The self-study way. Even though it wasn’t the easiest way, I know it was the best choice for me. I am very interested in the latest technologies, motion graphics, animation and how things pull together. I passed several certificate courses and in the end I said to myself, “Wow! That’s it!!!” ',
                            things_user_likes: ['swimming', 'riding', 'coding', 'eating', 'sleeping'] });
        

        });      
    };
   
   
   
    render(){
        return(
            <div> 
                <ProfileStyled>
                    <div className= "profile"> 
                        <div className= "profile-person"> 
                            <img src={this.state.avatar} alt ="michaela"/>
                            <h1>{this.state.first_name + " " + this.state.last_name}</h1>
                            <h2>{this.state.location}</h2>
                            <Link to="/editaccount"><button>Edit Profile</button></Link>
                        </div>

                        <div className= "profile-data"> 

                            <div className= "pd1">
                                <div className= "profile-about"> 
                                    <h5>About</h5>
                                    <p>{this.state.about_me}</p>
                                    <div className="profile-contact-data">
                                        <div className="profile-contact">
                                            <h5>Email</h5>
                                            <p>{this.state.email}</p>
                                        </div>
                                        <div className="profile-contact">
                                            <h5>Phone</h5>
                                            <p>+421 908 829 153</p>
                                        </div>
                                    </div>
                                </div>
                                <div className= "I-like">
                                    <h5>Things I like</h5>
                                    <div className="groupOfTags">
                                        {this.state.things_user_likes.map((data, index)=>
                                        <div className="tag" key={index}>{data}</div>
                                        )}
                                                                                                         
                                    </div>
                                </div>                           
                            </div>

                            <div className="pd2">
                                <div className="pd2-col">
                                    <h1>34</h1>
                                    <h3>Posts</h3>
                                </div>

                                <div className="pd2-col">
                                    <h1>256</h1>
                                    <h3>Likes</h3>
                                </div>

                                <div className="pd2-col">
                                    <h1>98</h1>
                                    <h3>Friends</h3>
                                </div>

                                <div className="pd2-col">
                                    <h1>129</h1>
                                    <h3>Followers</h3>
                                </div>

                                <div className="pd2-col">
                                    <h1>154</h1>
                                    <h3>Following</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </ProfileStyled>
            </div>
        )}
}
const mapStateToProps = (state) => ({
    token: state.token
});

export default connect(mapStateToProps)(ProfileAccount);