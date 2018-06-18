'use strict'

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', false);

const datamodelUser = mongoose.model('user');


const router = express.Router();

router.get('/',(req,res) =>{
    datamodelUser.find().exec().then(data =>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:nic/:password',(req,res)=>{
    const query = {$and:[{nic:req.params.nic},{password:req.params.password}]};
    datamodelUser.findOne(query).then(data=>{
        res.json(data || {});
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    })
});

router.post('/',(req, res)=>{
    const user = datamodelUser(req.body);
    user.save().then(data =>{
        res.json({success:true});
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;
