const express = require("express");
const router = require("./router");
const nodemailer = require("nodemailer");
const cors = require("cors")
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()
const morgan = require('morgan')


const path = require('path');
const app = express();


// connect mongoose
mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("database connect")
}).catch((error)=>{
  console.log("database error ",error)
})


app.use(cors({
  credentials:true,
  origin: process.env.CLIENT_URL,
  methods:[
    "GET","POST","DELETE","PUT","PATCH"
  ]
}))

  
  // Middleware to parse JSON
  app.use(express.json());
  app.use(morgan('dev'))


  // Middleware to parse JSON requests
  app.use(bodyParser.json());
  
  //static files setup
  app.use('/uploads',express.static(__dirname + '/uploads'));

  app.use("/api", router);

  // // for runnig build folder
  app.use(express.static(path.join(__dirname, '/build')));
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server is running on port "));

