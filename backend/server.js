const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require('./config/database');


//handling uncaughtexception errors


process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("shutting down the server due to uncaughtexpection");
    process.exit(1);
})


//configs

dotenv.config({path:'backend/config/config.env'})

//Database connection

connectDatabase()

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log("shutting down the server due to uncaught handle rejection");
    server.close(()=>{
        process.exit(1);
    })
})

 