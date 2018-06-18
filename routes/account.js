'use strict'

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', false);

const datamodel = mongoose.model('account');

const router = express.Router();

router.get('/',(req,res)=>{
    datamodel.find().exec().then(data =>{
        res.json(data);
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/',(req,res)=>{
    const account = new datamodel(req.body);
    account.save().then(data =>{
        res.json({success:true});
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500);
    });
});
router.get('/:nic',(req,res)=>{
    const query = {nic:req.params.nic};
    datamodel.findOne(query).exec().then(data=>{
        res.json(data || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

router.put('/token/:nic',(req,res)=>{
    const account = req.body;
    const query = {nic:req.params.nic};
    datamodel.findOneAndUpdate(query,{$set:{'token':account.token}}).then(data=>{
        res.json({success:true});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = router;