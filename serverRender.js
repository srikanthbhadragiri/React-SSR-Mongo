import React from 'react';
import ReactDOMServer from 'react-dom/server';

import config from './config';
import axios from 'axios';

import App from './src/components/App';

const getApiUrl = policyId => {
  if(policyId){
    return `${config.serverUrl}/api/policies/${policyId}`;
  }
  return `${config.serverUrl}/api/policies`;
};

const getInitialData = (policyId, apiData) => {
  console.log('policyId: ',policyId);
  if(policyId){
    return {
      currentPolicyId: apiData.policyId,
      policies: {
        [apiData.policyId]: apiData
      }
    };
  }
  return {
    policies: apiData.policies
  };
};

const serverRender = (policyId) =>
  axios.get(getApiUrl(policyId))
    .then(resp => {
      const initialData = getInitialData(policyId, resp.data);
      return {
        initialMarkUp: ReactDOMServer.renderToString(
          <App initialData={initialData}/>
        ),
        initialData
      };
    });

export default serverRender;

// const serverRender = () =>
//   axios.get(`${config.serverUrl}/api/policies`)
//     .then(resp => {
//       return {
//         initialMarkUp: ReactDOMServer.renderToString(
//           <App initialData={resp.data}/>
//         ),
//         initialData: resp.data
//       };
//     });

// const serverRender = () =>
//   axios.get(`${config.serverUrl}/api/policies`)
//     .then(resp => {
//       return {
//         initialMarkUp: ReactDOMServer.renderToString(
//           <App initialPolicies={resp.data.policies}/>
//         ),
//         initialData: resp.data
//       };
//     });

// const serverRender = () =>
//   axios.get(`${config.serverUrl}/api/policies`)
//     .then(resp => {
//       return ReactDOMServer.renderToString(
//         <App initialPolicies={resp.data.policies}/>
//       );
//     });
