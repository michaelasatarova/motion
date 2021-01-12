import React, { Component } from 'react';
import Routes from './Routs/Routs';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    } 
  }

  render(){
    return (
      <div >     
            <Routes />
      </div>
  );
}

}

export default connect()(App);
