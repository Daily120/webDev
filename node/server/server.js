const express = require('express');

const app = express();

//Express midleware
app.use((req, res, next) => {
    console.log("I am called before everyone, when request comes in");
    next();
})

//get request app.post for POST
app.get('/', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user); //automaticly does JSON.stringify and adds application/json in headers
});

app.listen(3000);
