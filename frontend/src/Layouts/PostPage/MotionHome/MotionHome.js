import React  from 'react';
import PostHeader from '../../../Components/PostHeader/PostHeader';
import PostSearchBar from '../../../Components/PostPage/PostSearchBar';
//import Posts from '../../../Components/PostPage/Posts';
import {connect} from 'react-redux';
import PostContent from '../../../DataFromServer/PostContent';
import {PostStyle} from './style';
import MichaelaPost from '../../../DataFromServer/MichaelaPost';
import {GetPosts} from '../../../Store/actions/Post';


class MotionHome extends React.Component {

    componentDidMount(){
        console.log('mounting in MotionHome');
        this.props.dispatch(GetPosts())
    }

    getCurrentDate(arg){
      // you get time from api and convert string to number of milisec
         let postDate = Date.parse(arg);     
       //get current date and convert it to  iliseconds   
        let time = new Date().getTime();
        let date = new Date(time);
        
        let millisec = date-postDate
      
            let seconds = (millisec / 1000).toFixed(0);
            let minutes = (millisec / (1000 * 60)).toFixed(0);
            let hours = (millisec / (1000 * 60 * 60)).toFixed(0);
            let days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0);

            if (seconds < 60) {
                return seconds + " Sec";
            } else if (minutes < 60) {
                return minutes + " minutes ago";
            } else if (hours < 24) {
                return hours + " hours ago";
            } else {
                return days + " Days ago"
            }     
    }
  

    render() { 
        console.log(this.props.posts);
      return(
            <div> 
                <PostHeader/>
                <PostSearchBar/> 
                {/* <Posts/>  */}
                    
                    <PostStyle>
                        
                        <div className="postWrap">
                            <MichaelaPost/>
                            {this.props.posts.map((data, index)=>
                            <PostContent key={index} content={data.content} likes={data.amount_of_likes} 
                            created={this.getCurrentDate(data.created)} 
                            shared={data.shared} user={data.user.username} avatar ={data.user.avatar}/>)} 
                        </div> 
                   </PostStyle>     
            </div>
        )}
}

const mapStateToProps = (state) => ({
    posts: state.posts,
});


export default connect(mapStateToProps)(MotionHome);

