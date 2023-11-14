const {City}=require("../models/index");
class CityRepository{
    static async createCity({name}){
        try{
           const city =await City.create({name});
           return city;
        }catch(err){
           throw {err};
        }
    }

async deleteCity(cityid){
    try{
      //find 
      // console.log(City.findByPk(cityid));
      await City.destroy({
        where :{
            id:cityid
        }
      })
      return true;
    }catch(err){
   throw {err};
    }
}


async updateCity(cityId,data){
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