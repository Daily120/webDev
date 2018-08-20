const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
    console.log(req.query); //query string ?name=...&id=....
    // req.body
    console.log(req.headers);
    console.log(req.params); //everything in the link that after / sign, because of :id
    res.status(404).send("not found");
})

app.listen(3000);