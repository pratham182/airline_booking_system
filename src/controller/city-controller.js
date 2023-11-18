const {CityService} = require("../services/index");

/*
POST
data ->req.body

*/
const CityServices= new CityService();  //object

const create =async(req,res)=>{
    try{
     const city=await CityServices.createCity(req.body);
     return res.status(201).json({
         data:city,
         success:true,
         message:"Successfully created a city",
         err:{}
    })
}catch(err){
     console.log(err);
     return res.status(500).json({
         data:{},
         success:false,
         message:"Not able to create a city",
         error:err
    })
}
}

//delete -> /city/:id
const destroy =async(req,res)=>{
    try{
        
         const response=await CityServices.deleteCity(req.params.id);
         
         return res.status(201).json({
             data:response,
             success:true,
             message:"Successfully delete a city",
             err:{}
        })
    }catch(err){
         console.log(err);
         return res.status(500).json({
             data:{},
             success:false,
             message:"Not able to delete a city",
             error:err
        })
    }
}

//Get -> city/:id
const get=async(req,res)=>{
    try{
         const response=await CityServices.getCity(req.params.id);
         return res.status(201).json({
             data:response,
             success:true,
             message:"Successfully get a city",
             err:{}
        })
    }catch(err){
         console.log(err);
         return res.status(500).json({
             data:{},
             success:false,
             message:"Not able to fetch a city",
             error:err
        });
    }
}

//patch -> /city/:id ->req.body
const update=async(req,res)=>{
    try{
         const response=await CityServices.updateCity(req.params.id,req.body);
         return res.status(201).json({
             data:response,
             success:true,
             message:"Successfully update a city",
             err:{}
        })
    }catch(err){
         console.log(err);
         return res.status(500).json({
             data:{},
             success:false,
             message:"Not able to update a city",
             error:err
        });
    }
}

//get all the cities
const getAllCities=async(req,res)=>{

    try{
  const response=await CityServices.getAllCities(req.query);
  return res.status(201).json({
    data:response,
    success:true,
    message:"Successfully find cities",
    err:{}
  })
    }catch(err){
        console.log(err);
         return res.status(500).json({
             data:{},
             success:false,
             message:"Not able to find cities",
             error:err
        });
    }

}

module.exports={
    create,
    destroy,
    get,update,getAllCities
}

