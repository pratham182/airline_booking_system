const express=require("express");
const bodyParser=require("body-parser");

const {port}=require("./config/serverConfig");

const ApiRoutes = require("./routes/index");

const setupAndStartServer=async()=>{

    
    //create 
    const app=express();
     
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended:true
    }))
   
    app.use("/api",ApiRoutes);

    app.listen(port,async()=>{

        console.log(`App is listening on port ${port}`);
        

       

    
    });
}
setupAndStartServer();