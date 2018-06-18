'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const sourcecodeModel = mongoose.model('sourcecode'),
    qualityModel = mongoose.model('quality');

const Router = express.Router();

Router.get('/', (req, res) => {
    sourcecodeModel.find().populate('qualitys').exec().then(sourcecodes => {
        res.json(sourcecodes);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    sourcecodeModel.findById(req.params.id).populate('qualitys').exec().then(sourcecode => {
        res.json(sourcecode || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const sourcecode = new sourcecodeModel(req.body);
    sourcecode.save().then(sourcecode => {
        res.json(sourcecode);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    const sourcecode = req.body;
    delete sourcecode._id;
    const sourcecodeId = req.params.id;
    sourcecodeModel.findByIdAndUpdate(sourcecodeId, {$set: sourcecode}).then(sourcecodeDb => {
        res.json(sourcecode);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    sourcecodeModel.findByIdAndRemove(req.params.id).then((sourcecode) => {
        const qualityIds = sourcecode.qualitys.map((qualityId => qualityId));
        return qualityModel.remove({_id: {$in: qualityIds}});
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/:id/qualitys', (req, res) => {
    let quality = new qualityModel(req.body);
    const sourcecodeId = req.params.id;
    quality.sourcecode = sourcecodeId;
    quality.save().then(qualityDb => {
        return sourcecodeModel.findByIdAndUpdate(sourcecodeId, {$push: {"qualitys": qualityDb._id}})
    }).then(() => {
        return sourcecodeModel.findById(sourcecodeId).populate('qualitys').exec();
    }).then(sourcecodeDb => {
        res.json(sourcecodeDb);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;