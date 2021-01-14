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

                        <div className="find-friends-div1">
                            <Friend/>
                            
                            {this.props.friends.length ? this.props.friends.map((data, index) =>
                            <FriendFromData key={index} country={data.country} city={data.city} username={data.username} about={data.about} avatar={data.avatar}
                                hobby={data.hobby} 
                                />): 'Loading'} 
                        </div>
                    
                
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