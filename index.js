const express = require("express");
const port =5000;
const connectDb = require('./config/dbConnection');

const app = express();

app.use(express.json());

connectDb();

//setting view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


//setting routes
app.use('/products' , require('./routes/eccomerceRoutes'))


//running the server
app.listen(port , ()=>{
    console.log("Server is Running on the port: ",port);
})