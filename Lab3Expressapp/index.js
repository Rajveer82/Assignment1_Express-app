//import express
const express = require(`express`);
const bodyParser = require(`bodyParser`);


//Initialize the express app
const app = express();

//Middleware to parseJSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the first program of Node.js Express');
});

//set the port
const port = 3000;

//start the server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});