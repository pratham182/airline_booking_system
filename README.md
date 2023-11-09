# Welcome to flight service project
## project setup:
- clone the project on you local through git clone command
- Install all packages through npm install command on yout root directory 
- create .env file in root directory and add followng environment imformation -
   -`PORT=3000`
- and also create `src/config` folder and add the following information i.e credential in json file 

```
{
  "development": {
    "username": <Your_db>,
    "password": <Your db password>,
    "database": "Flight_search",
    "host": "localhost",
    "dialect": "mysql"
  }
}
```

