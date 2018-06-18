'use strict'

const  mongoose = require ('mongoose');

const schema = mongoose.Schema;

const sourcecodeSchema = new schema({
  uploadedDate: {type:Date, default: Date.now},
  developer: {type: String },
  project: { type:String },
  javacode: {type:String, default: Date.now},
  remarks : {type : String},
  qualitys: [{
        type: schema.Types.ObjectId,
        ref: 'quality'
  }]
 
});

const sourcecode = mongoose.model('sourcecode', sourcecodeSchema);
module.exports = sourcecode;