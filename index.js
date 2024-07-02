
const express=require('express');
const PORT=process.env.PORT || 3000;
var cors = require('cors');
require('dotenv').config();
const routes=require('./Routes/route');
const app=express();
const dbConnect=require('./Config/database');


app.use(express.json());


app.use(
    cors({
        origin:'*',
    })
)
app.use('/api/v1',routes);
    
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
  });
