const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const imageapi = require('./controllers/imageapi')

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE_NAME
    }
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).json('Celebrity Lookalike Web App Backend'))
app.post('/signin', signin.signinHandler(db, bcrypt))
app.post('/register', register.registerHandler(db, bcrypt))
app.get('/profile/:id', profile.profileHandler(db))
app.put('/image', image.imageHandler(db))
app.post('/imageapi', imageapi.handleApiCall())

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})