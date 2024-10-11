//import express
const express = require(`express`);
const bodyParser = require(`bodyParser`);
const mongoose = require(`mongoose`);


//Initialize the express app
const app = express();

//MongoDb Atlas connection String
const mongoURI = 'mongodb+srv://Rajveer:Rajjo123@cluster0.jdl76.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';



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