

const mongoose=require('mongoose');
require('dotenv').config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log('Connected to database'))
    .catch(()=>{
        console.log('Failed to connect to database');
        process.exit(1);
    })
}

module.exports=dbConnect;