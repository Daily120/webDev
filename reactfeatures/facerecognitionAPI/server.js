const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '123',
        database: 'smart-brain'
    }
})

const app = express();

app.use(bodyParser.json());
app.use(cors()); //for unsecure requests. just to test the app on a localhsot

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally1234@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[2].email &&
        bcrypt.compareSync(req.body.password, database.users[2].password)) {
            res.json(database.users[2]);
        } else {
            res.status(400).json('error logging in')
        }
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    const hash = bcrypt.hashSync(password);
    // database.users.push({
    //     id: '125',
    //     name: name,
    //     email: email,
    //     password: hash,
    //     entries: 0,
    //     joined: new Date()
    // });
    db('users')
        .returning('*')
        .insert({
            email: email,
            name: name,
            joined: new Date()
        })
        .then(user => {
            res.json(user[0]);
        })
        .catch(err => res.status(400).json('unable to register'))
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({id}) //ES6 syntax=== where({id: id})
        .then(user => user[0] ? res.json(user[0]) : res.status(400).json('Not found'))
        .catch(err => res.status(400).json('error getting user'))
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++;
            res.json(user.entries);
        }
    })
    if(!found) {
        res.status(404).json('no such user');
    }
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})


/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user

*/
