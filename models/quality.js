'use strict'

const  mongoose = require ('mongoose');

const schema = mongoose.Schema;

const qualitySchema = new schema({
  category: {type: String },
  standard: { type:String },
  sourcecode: {
        type: schema.Types.ObjectId,
        ref: 'sourcecode'
  }
 
});

const quality = mongoose.model('quality', qualitySchema);
module.exports = quality;