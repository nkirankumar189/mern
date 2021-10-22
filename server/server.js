//import the modules
//require is predefined function used to import the mpdules
 const express=require("express");
 const mongodb=require("mongodb");
 const cors = require("cors");



 const app=express();


 //set the MIME type

 app.use(express.json());

 //enabling the ports communication
 //enabling the cors policy

 app.use(cors());

 //crete the mongodb client
 //mongo client helps to connect to database
 const ashokit=mongodb.MongoClient;
 //ashok it is client object
 //ashok it object is used to connect to mongodb client

 //create the rest api
 app.get('/products',(req,res)=>{

    ashokit.connect('mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/mern?retrywrites=true&w=majority',
    (err,connection)=>{
        if(err) throw err;
        else{
            const db=connection.db("mern");
            db.collection('products').find().toArray((err,array)=>{
                   if(err) throw err;
                   else{
                       res.send(array);
                   }
            });
        }
    });

 })
 //assign the port number

 app.listen(8080,()=>{
     console.log("server listening the port number 8080")
 });