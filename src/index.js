import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';

import App from './components/App';

ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <App initialPolicies={window.initialData.policies} />,
//   document.getElementById('root')
// );


  // axios.get('/api/policies')
  //   .then(resp => {
  //     ReactDOM.render(
  //       <App initialPolicies={resp.data.policies} />,
  //       document.getElementById('root')
  //     );
  //   })
  //   .catch(console.error);
