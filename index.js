'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
const app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

mongoose.connect('mongodb://127.0.0.1:27017/proanalyza',{useMongoClient: true}, err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});


require('./models/account.js');
require('./models/user.js');
require('./models/sourcecode.js');
require('./models/quality.js');
require('./models/userfeedback.js');

const accountRouter = require('./routes/account.js');
const userRouter = require('./routes/user.js');
const sourceRouter = require('./routes/sourcecode.js');
const userfeedbackRouter = require('./routes/userfeedback.js');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.use('/account',accountRouter);
app.use('/user',userRouter);
app.use('/sourcecodes', sourceRouter);
app.use('/userfeedback', userfeedbackRouter);

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});
