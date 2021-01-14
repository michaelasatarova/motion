import React, { Component } from 'react';
import {ProfileStyled} from './style';
import { Link } from 'react-router-dom';
import {UserAccount} from '../../Store/actions/UserAccount';
import {connect} from 'react-redux';
import BlogPostGallery from '../../Components/BlogPost/BlogPostGallery';
import {AccountProfileStyled} from  '../../Layouts/PostPage/Profile/style';




class ProfileAccount extends Component {
   
    componentDidMount(){
        console.log('mounting in UserAccount');
        this.props.dispatch(UserAccount())
    }
   
   
    render(){
        return(
            <div> 
                <ProfileStyled>
                    <div className= "profile"> 
                        <div className= "profile-person"> 
                            <img src={this.props.userAccount.avatar} alt ="michaela"/>
                            <h1>{this.props.userAccount.first_name}{this.props.userAccount.last_name}</h1>
                            <h2>{this.props.userAccount.country},{this.props.userAccount.city}</h2>
                            <Link to="/editaccount"><button>Edit Profile</button></Link>
                        </div>

                        <div className= "profile-data"> 

                            <div className= "pd1">
                                <div className= "profile-about"> 
                                    <h5>About</h5>
                                    <p>{this.props.userAccount.about}</p>
                                    <div className="profile-contact-data">
                                        <div className="profile-contact">
                                            <h5>Email</h5>
                                            <p>{this.props.userAccount.email}</p>
                                        </div>
                                        <div className="profile-contact">
                                            <h5>Phone</h5>
                                            <p>!!! in user model you are missing phone number</p>
                                        </div>
                                    </div>
                                </div>
                                <div className= "I-like">
                                    <h5>Things I like</h5>
                                    <div className="groupOfTags">
                                        {/* {this.state.things_user_likes.map((data, index)=>
                                        <div className="tag" key={index}>{data}</div>
                                        )} */}
                                        <div className="tag" >riding</div>
                                        <div className="tag">coding</div>
                                        <div className="tag">sleeping</div>
                                          NOTE: add hoby to user serializer                                                               
                                    </div>
                                </div>                           
                            </div>

                            <div className="pd2 ">
                                <div className="pd2-col active-link">
                                    <h1>34</h1>
                                    <h3 className ="">Posts</h3>
                                </div>

                                <div className="pd2-col">
                                    <h1>256</h1>
                                    <h3>Likes</h3>
                                </div>

                                <div className="pd2-col">
                                    {/* <h1>{this.props.userAccount.friends.length}</h1> */}
                                    <h3>Friends</h3>
                                </div>

                                <div className="pd2-col">
                                    {/* <h1>{this.props.userAccount.followers.length} </h1> */}
                                    <h3>Followers</h3>
                                </div>

                                <div className="pd2-col">
                                    {/* <h1>{this.props.userAccount.followees.length}</h1> */}
                                    <h3>Followees</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <AccountProfileStyled>                     
                        <BlogPostGallery/>                   
                        <BlogPostGallery />              
                    </AccountProfileStyled>

                </ProfileStyled>
            </div>
        )}
}
const mapStateToProps = (state) => {
    console.log("User Profile: ", state. userAccount);
    return {
        token: state.token,
        userAccount:state. userAccount
}};

export default connect(mapStateToProps)(ProfileAccount);