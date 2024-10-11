//import express
const dotenv = require(`dotenv`);
dotenv.config({path:`./config.env`});
const express = require(`express`);
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`); 


//Initialize the express app
const app = express();



//connect to mongoDb Atlas
mongoose.connect("mongodb+srv://Rajveer:Rajjo123@cluster0.jdl76.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 .then(()=>{
    console.log(`Connected to mongoDb`);
 })   
.catch((error)=>{
    console.error(`Error connecting to mongoDb`,error);
});


//Middleware to parseJSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the first program of Node.js Express');
});

app.post(`/submit`,(req,res)=>{
    res.send(`Received data:${req.body.data}`)
});

//set the port
const port = 3000;

//start the server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});