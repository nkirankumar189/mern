const express=require("express");
const cors = require("cors");
const mysql = require("mysql");


const app=express();
 
app.use(cors());

app.use(express.json());

const connection=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"admin",
        database:"kiran"
})

connection.connect();

app.get("/fetch",(req,res)=>{
             connection.query('select * from product',(err,records,fields)=>{
                    if(err) throw err;
                    else{
                        res.send(records);
                    }
             });
});

app.post("/insert",(req,res)=>{
     connection.query('insert into product values (${req.body.p_id},${req.body.p_name},${req.body.p_cost})',(err,result)=>{
                  if(err) throw err;
                  else{
                      res.send({"insert":"success"})
                  }
     });
});
app.put("/update",(req,res)=>{
         connection.query('update product set p_id=${req.body.p_id} where p_cost=${req.body.p_cost}',(err,result)=>{
                      if(err) throw err;
                      else{
                          res.send({"update":"success"})
                      }
         });
});
app.delete("/delete",(req,res)=>{
       connection.query('delete from product where p_id=${req.body.p_id}',(err,result)=>{
           if(err) throw err;
           else{
               res.send({"delete":"success"})
           }

       });
});

app.listen(8080,()=>{
    console.log("server listening the port number 8080");
})