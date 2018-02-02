import React, { Component } from 'react';

class PolicyDetails extends Component{
  render(){
    return(
      <div>
        <div>
          <p>{this.props.policyDesc}</p>
        </div>
        <div style={{'color': '#0000ee', 'cursor':'pointer'}} onClick={this.props.policyAllClick}>
          List All Policies
        </div>
      </div>
    );
  }
};




export default PolicyDetails;
