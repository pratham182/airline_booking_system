const {CityRepository}=require("../repository/index");
class CityService{
    constructor(){
        this.CityRepository=new CityRepository();

    }
   
    async createCity(data){
        
        try{
          const city=await this.CityRepository.createCity(data);
          return city;
        }catch(err){
       console.log("Something went wrong");
       throw {err};
        } 
    }

    async deleteCity(){
        try{
         const res=this.CityRepository.deleteCity(cityId);
         return res;
        }catch(err){
       console.log("Something went wrong");
       throw {err};
        } 

    }

    async updateCity(cityId,data){
        try{
            const city=await this.CityRepository.UpdateCity(cityId,data);
            return city;
         
        }catch(err){
       console.log("Something went wrong");
       throw {err};
        } 

    }

    async getCity(){
        try{
         const city=await this.CityRepository.getCity(cityId);
         return city;
        }catch(err){
       console.log("Something went wrong");
       throw {err};
        } 

    }

}

module.exports=CityService