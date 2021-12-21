// require dependencies
const express = require('express');


// initialize the express app
const app = express();

// configure server settings
require('dotenv').config();





// configure data source


// mount middleware

// mount routes
app.get('/', (req, res) => {
    res.send('Hello, Tyler!'); // we could also send HTML or JSON
});

// index route - list all the instances of a resource

// routes that use URL params

// show route - list one particular instace of a resource

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`${req.params.tip} ${req.params.tipPercentage}`)
})

// app.get('/users/:firstName/:lastName', (req, res) => {
//     console.log(req.query); // this is how we access query parameters
//     console.log(req.params); // this is how we access url parameters
//     res.send(`Here's the details for ${req.params.firstName} ${req.params.lastName}`);
// });


// tell the app to listen for requests
app.listen(3000, () => {
    console.log('Express is listening')
});