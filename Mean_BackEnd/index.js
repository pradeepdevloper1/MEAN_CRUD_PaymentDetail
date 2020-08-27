var http = require('http');
var express=require('express');
var port = process.env.port || 8082;
var app= express();
var EmpAppRoutes=require('./routes/PaymentAppRoutes');
var mongoose =require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');


mongoose.connect('mongodb://localhost/PaymentDetailDB',{useUnifiedTopology:true,useNewUrlParser:true});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/PaymentDetail',EmpAppRoutes);
http.createServer(app).listen(port);
console.log("Backend Running on Port :",port );