import React from 'react';
import PolicyRow from './PolicyRow';

const PolicyTableView = ({ policies, onPolicyClick }) => (
  <div>
    <h3>List of Policies</h3>
    <table className="table table-bordered table-responsive">
      <thead>
      <tr>
        <th>Policy Holder Name</th>
        <th>Policy Amount</th>
        <th>Premium Amount</th>
        <th>Due Date</th>
      </tr>
      </thead>
      <tbody>
        {Object.keys(policies).map(policyId =>
          <PolicyRow
            key={policyId}
            onClick={onPolicyClick}
            {...policies[policyId]} />
        )}
      </tbody>
    </table>
  </div>
);

export default PolicyTableView;

// <tbody>
//   {policies.map(policy =>
//     <PolicyRow
//       key={policy.policyId}
//       onClick={onPolicyClick}
//       {...policy} />
//   )}
// </tbody>


// <tbody>
//   {props.initialPolicies.map(policy =>
//     <PolicyRow
//       key={policy.policyId}
//       onClick={props.onPolicyClick}
//       {...policy} />
//   )}
// </tbody>


// class PolicyTableView extends React.Component {
//   state = {
//     policies:this.props.initialPolicies,
//   }
//   render(){
//     return(
//       <div>
//         <h3>List of Policies</h3>
//         <table className="table table-bordered table-responsive">
//           <thead>
//           <tr>
//             <th>Policy Holder Name</th>
//             <th>Policy Amount</th>
//             <th>Premium Amount</th>
//             <th>Due Date</th>
//           </tr>
//           </thead>
//           <tbody>
//             {this.state.policies.map(policy =>
//               <PolicyRow
//                 key={policy.policyId}
//                 onClick={onPolicyClick}
//                 {...policy} />
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// };
// export default PolicyTableView;
