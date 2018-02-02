import React, { Component } from 'react';
import Header from './Header';
import PolicyTableView from './PolicyTableView';
import PolicyDetails from './PolicyDetails';
import * as api from '../api';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
}

const onPopState = handler => {
  window.onpopstate = handler;
}

class App extends React.Component {
  state = this.props.initialData;
  // state = {
  //   // headerMessage: 'Insurance Policy',
  //   policies: this.props.initialPolicies
  // };
  fetchPolicy = (policyId) => {
    pushState(
      { currentPolicyId: policyId },
      `/policy/${policyId}`
    );
    api.fetchPolicy(policyId).then(policy => {
      this.setState({
        // headerMessage: policy.policyHolderName,
        currentPolicyId: policy.policyId,
        policies: {
          ...this.state.policies,
          [policy.policyId]: policy
        }
      });
    });
    // look up the policy
    // this.state.policies[policyId]
    // this.setState({
    //   headerMessage: this.state.policies[policyId].policyHolderName,
    //   currentPolicyId: policyId
    // })
  };

  fetchPolicyAll = () => {
    pushState(
      { currentPolicyId: null },
      '/'
    );
    api.fetchPolicyAll().then(policies => {
      this.setState({
        currentPolicyId: null,
        policies
      });
    });
  };

  componentDidMount() {
    onPopState((event) => {
      console.log(event.state);
      this.setState({
        currentPolicyId: (event.state || {}).currentPolicyId
      });
    })
    // window.onpopstate = (event) => {
    //   console.log(event);
    // };
  }

  componentWillUnmount() {
    onPopState(null);
  }

  pageHeader(){
    if(this.state.currentPolicyId) {
      return this.currentPolicy().policyHolderName;
    }

    return 'Insurance Policies';
  }
  currentPolicy(){
    return this.state.policies[this.state.currentPolicyId];
  }
  currentDisplayedPolicy(){
    if(this.state.currentPolicyId) {
      return <PolicyDetails
                policyAllClick={this.fetchPolicyAll}
                {...this.currentPolicy()} />;
    }

    return <PolicyTableView
            onPolicyClick={this.fetchPolicy}
            policies={this.state.policies}/>
  }
  render(){
    return(
      <div>
        <Header message={this.pageHeader()} />
        <div>
          {this.currentDisplayedPolicy()}
        </div>
      </div>
    );
  };
}
export default App;
