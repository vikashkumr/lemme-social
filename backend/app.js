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
const userRoutes = require('./routes/userauth')
const postRoutes = require('./routes/post')
app.use('/user', userRoutes);
app.use('/post', postRoutes);


app.listen(PORT, ()=> {
    console.log('server is running on port ', PORT);
})

module.exports = app;