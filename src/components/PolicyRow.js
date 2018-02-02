import React, { Component } from 'react';

class PolicyRow extends React.Component {
  handleClick = () => {
    console.log('hi', this.props.policyHolderName, this.props.policyId);
    this.props.onClick(this.props.policyId)
  };
  render(){
    return(
      <tr>
        <td style={{'cursor':'pointer'}} onClick={this.handleClick}><a>{this.props.policyHolderName}</a></td>
        <td>{this.props.policyAmount}</td>
        <td>{this.props.policyPremium}</td>
        <td>{this.props.policyDueDate}</td>
      </tr>
    );
  }
};

export default PolicyRow;
