import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
// import config from '../config';

// console.log('config.mongodbUri : ',config.mongodbUri);
const mongodbUri = 'mongodb://sri:sri@ds157971.mlab.com:57971/emaily-dev';
console.log('mongodbUri : ',mongodbUri);
let mdb;
MongoClient.connect(mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/', (req, res) => {
});

router.get('/policies', (req, res) => {
  let policies = {};
  mdb.collection('policies').find({})
     .each((err, policy) => {
       assert.equal(null, err);

       if(!policy) {
         res.send({ policies });
         return;
       }

       policies[policy.policyId] = policy;
     });
});

router.get('/policies/:policyId', (req, res) => {
  console.log('get one policy...', req.params.policyId);
  mdb.collection('policies')
     .findOne({ policyId: Number(req.params.policyId) })
     .then(policy => {
       console.log('policy fetched ', policy);
       res.send(policy)
     })
     .catch(console.error)
});

export default router;


//////////////////////

// import express from 'express';
// import data from '../src/testData';
//
// const router = express.Router();
//
// router.get('/', (req, res) => {
//   res.send({ data: [] });
// });
//
// const policies = data.policies.reduce((obj, policy) => {
//   obj[policy.policyId] = policy;
//   return obj;
// }, {});
//
// router.get('/policies', (req, res) => {
//   // res.send({ policies: data.policies });
//
//   // res.send({
//   //   policies: data.policies.reduce((obj, policy) => {
//   //     obj[policy.policyId] = policy;
//   //     return obj;
//   //   }, {})
//   // });
//
//   res.send({
//     policies: policies
//   });
// });
//
// router.get('/policies/:policyId', (req, res) => {
//   // req.params.policyId
//   let policy = policies[req.params.policyId];
//   res.send(policy);
// });
//
// export default router;
