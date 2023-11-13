const express=require("express");

const bodyParser=require("body-parser");

const {port}=require("./config/serverConfig");
const {City}=require("./models/index");
const city_repo=require("./repository/city-repository");
//const city = require("./models/city");

const setupAndStartServer=async()=>{
    
    //create 
    const app=express();
     
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended:true
    }))
   


    app.listen(port,async()=>{

        console.log(`App is listening on port ${port}`);
         const repo=new city_repo();
        repo.deleteCity({id:1});
    
    });
}
setupAndStartServer();