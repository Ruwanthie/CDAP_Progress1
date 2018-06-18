'use strict'

const  mongoose = require ('mongoose');

const schema = mongoose.Schema;

const userfeedbackSchema = new schema({
  understanding: {type: String },
  reporting: { type:String },
  upgrades : {type : String},
  control: {type: String },
  adherence: { type:String },
  initiatives : {type : String},
  technologies: {type: String },
  contribution: { type:String }
});

const userfeedback = mongoose.model('userfeedback', userfeedbackSchema);
module.exports = userfeedback;