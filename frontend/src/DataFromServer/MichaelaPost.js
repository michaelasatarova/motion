import React, {Component} from 'react';
import michaela from '../assets/michaela.jpg';
import SendBTN from '../assets/send-btn.png';
import {MichaelaPostStyled} from './style';
import {connect} from 'react-redux';
import { GetPosts } from '../Store/actions/Post';

import baseUrl from '../Helpers/BaseUrl';

class MichaelaPost extends Component{
    constructor() {
        super();  
        this.state = {
          content: "",     
        };
      }     

      handleContent = (event) => {
        this.setState({ content: event.target.value });
      };
      
      handlePostSubmit = (e) => {
          e.preventDefault();

        const config = {
          body: JSON.stringify({ content: this.state.content}),
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.props.token}`
          }),
        };
        fetch(`${baseUrl}/backend/api/social/posts/`, config) 
          .then((res) => res.json())  
          .then((data)=>{
              this.props.dispatch(GetPosts())
              this.setState({ content: "" });

          });       
      };

    
    render(){
        console.log(this.state.content)
        return (
            <MichaelaPostStyled>
                <form className="bp-posts" onSubmit={this.handlePostSubmit}>
                    <img src={michaela} alt=""/>
                    <input type="text" onChange={this.handleContent} placeholder="What is on your mind Michaela?" value={this.state.content}/>
                    <div className="send-btn">
                        <button  className="btn" onClick={this.handlePostSubmit}><img src={SendBTN} alt="" width="40px" /></button>
                    </div>
                </form>
            </MichaelaPostStyled>
        )}
}
const mapStateToProps = (state) => ({
    token: state.token
});

export default connect(mapStateToProps)(MichaelaPost);