const {CityRepository}=require("../repository/index");
class CityService{
    constructor(){
        this.CityRepository=new CityRepository();

    }
   
    async createCity(data){
        
        try{
        //   const city=await this.CityRepository.createCity(data);
        const city=CityRepository.createCity(data);
          return city;
        }catch(err){
       console.log("Something went wrong");
       throw {err};
        } 
    }

    async deleteCity(cityId){
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
            const city=await this.CityRepository.updateCity(cityId,data);
            return city;
         
        }catch(err){
       console.log("Something went wrong");
       throw {err};
        } 

    }

    async getCity(cityId){
        try{
         const city=await this.CityRepository.getCity(cityId);
         return city;
        }catch(err){
       console.log("Something went wrong");
       throw {err};
        } 

    }
    async getAllCities(){
        try{
            const cities=await this.CityRepository.getAllCities();
            return cities;
        }catch(err){
            console.log("Something went wrong");
            throw {err};
        }
    }

}

module.exports=CityService;