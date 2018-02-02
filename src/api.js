import axios from 'axios';

export const fetchPolicy = policyId => {
  return axios.get(`/api/policies/${policyId}`)
              .then(resp => resp.data);
};

export const fetchPolicyAll = () => {
  return axios.get('/api/policies')
              .then(resp => resp.data.policies);
};
