const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('connected', () => {
    console.log('mongo connected');
});
db.on('error', (err) => {
    console.log('mongo connection err : ',err);
});

app.use(express.json());
const userAuthRoute = require('./routes/userauth')
const postRoute = require('./routes/post')
const userRoute = require('./routes/user')
app.use('/auth', userAuthRoute);
app.use('/post', postRoute);
app.use('/user', userRoute);


app.listen(PORT, ()=> {
    console.log('server is running on port ', PORT);
})

module.exports = app;