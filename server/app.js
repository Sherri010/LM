const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const port = process.env.PORT || 8000;
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(path.dirname(__dirname) +'/client/build')));
app.use(session({ secret: 'movie', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
    app.use(errorHandler());
}

app.use(require('./routes'));


app.get('/*', (req,res) => {
    res.sendFile(path.join(path.dirname(__dirname) +'/client/build', 'index.html'));
});


app.listen(port, () => console.log(`Listening at ${port}`));