const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PolicySchema = new Schema({
  policyId: String,
  policyHolderName: String,
  policyAmount: Number,
  policyPremium: Number,
  policyDueDate: String
});

const Policy  = mongoose.model('policy', PolicySchema );

module.exports = Policy;
