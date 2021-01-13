import React, {Component} from 'react';
import PostHeader from '../../../Components/PostHeader/PostHeader';
import Friend from '../../../Components/Friend/Friend';
import FriendFromData from '../../../Components/Friend/FriendFromData';
import{FindFriendsStyle} from './style';
import { GetFriends } from '../../../Store/actions/Friends';
import {connect} from 'react-redux';


class FindFriends extends Component {
    
    componentDidMount(){
        console.log('mounting in FindFriends');
        this.props.dispatch(GetFriends())
    }

    render(){
        console.log(this.props.friends);
        return(
            <div> 
                    <PostHeader/>
                    <FindFriendsStyle>
                   
                    <Friend/>
                    {this.props.friends.map((data, index) =>
                    <FriendFromData key={index} email={data.email} username={data.username} about_me={data.about_me} avatar={data.avatar}
                        things_user_likes={data.things_user_likes}/>)} 
                    
                    
                
                    </FindFriendsStyle>           
            </div>
    )}
}

const mapStateToProps = (state) => {
    console.log("Friends: ",state.friends);
    return {
   friends: state.friends,
}};

export default connect(mapStateToProps)(FindFriends);