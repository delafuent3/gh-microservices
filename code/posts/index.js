const express = require('express');
const bodyParser = require('body-parser');
// Module to create random numbers (ID)
const { randomBytes } = require('crypto');



const app = express();

app.use(bodyParser.json());

// Object to store ALL posts
const posts = {};


app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/posts', (req, res) => {
    // Create id
    const id = randomBytes(4).toString('hex');

    // Body request will have a field called title. Following function will extract it
    const { title } = req.body;

    // d
    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id]);

})

app.listen(4000, () => {
    console.log('Express server listening on port 4000');
})