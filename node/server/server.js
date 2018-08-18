const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Express midleware
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //applies only to Content-Type: application/json

//get request app.post for POST
app.get('/', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user); //automaticly does JSON.stringify and adds application/json in headers
});

app.get('/profile', (req, res) => {
    res.send("getting profile");
});

app.post('/profile', (req, res) => {
    console.log(req.body);
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
});

app.listen(3000);
