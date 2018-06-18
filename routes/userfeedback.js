'use strict'

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', false);

const userfeedbackModel = mongoose.model('userfeedback');


const router = express.Router();

router.get('/',(req,res) =>{
    userfeedbackModel.find().exec().then(data =>{
        res.json(data);
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    });
});



router.post('/',(req, res)=>{
    const userfeedback = userfeedbackModel(req.body);
    userfeedback.save().then(data =>{
        res.json({success:true});
    }).catch(err=>{
        console.log(err);
        res.sendStatus(500);
    });
});

module.exports = router;
