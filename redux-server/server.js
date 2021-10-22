const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const kiran = mongodb.MongoClient;


const url =" mongodb+srv://admin:admin@majorproject.9yrsk.mongodb.net/ecommerce?retryWrites=true&w=majority"


app.get("/products" , (req, res)=>{
    kiran.connect(url,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ecommerce");

            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
})

app.listen(8080,()=>{
    console.log("server listening port number 8080");
})

