'use strict'

const  mongoose = require ('mongoose');
const schema = mongoose.Schema;

const account_schema = new schema({
    account_id:String,
    name:String,
    nic:String,
    registered_date:Date,
    balance:Number,
    token:String

});

const account = mongoose.model('account',account_schema);
module.exports=account;