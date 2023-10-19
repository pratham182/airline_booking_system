const express=require("express");
const {port}=require("./config/serverConfig");


const setupAndStartServer=async()=>{
    const app=express();
    
    app.listen(port,()=>{
        console.log(`App is listening on port ${port}`);
         
    });
}
setupAndStartServer();