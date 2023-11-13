const {City}=require("../models/index");
class CityRepository{
    async createCity({name}){
        try{
           const city =await City.create({name});
           return city;
        }catch(err){
         throw {err};
        }
    }

async deleteCity({cityid}){
    try{
      await City.destroy({
        where :{
            id:cityid
        }
      })
    }catch(err){
   throw {err};
    }
}


async UpdateCity(cityId,data){
  try{
     const city=await City.update(data,{
      where:{
        id:cityId
      }
     })
     return city;
  }
  catch(err){
     throw{err};
  }
}

async getCity(cityId){
  try{
    const city=await City.findByPk(cityId);
    return city;
    
  }catch(err){
    throw{err};
  }
}


}



module.exports=CityRepository;