'use strict'
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const  user_schema = new schema({
    name:String,
    address:String,
    phone_number:String,
    gender:String,
    nic:String,
    password:String
});

const user = mongoose.model('user',user_schema);
module.exports = user;