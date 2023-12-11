const express = require("express");
const router = require("./router");
const nodemailer = require("nodemailer");
const cors = require("cors")
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

const app = express();


// connect mongoose
mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("database connect")
}).catch((error)=>{
  console.log("database error ",error)
})


app.use(cors({
  credentials:true,
  origin:[
    process.env.CLIENT_URL_1,
    process.env.CLIENT_URL_2,
  ],
  methods:[
    "GET","POST","DELETE","PUT","PATCH"
  ]
}))




const path = require('path');
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));


// Handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use("/", router);

//static files setup
app.use('/uploads',express.static(__dirname + '/uploads'));


// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server is running on port "));

