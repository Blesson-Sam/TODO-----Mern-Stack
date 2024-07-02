

const TODO=require('../Models/todo');

exports.getTodo = async(req,res)=>{
    try{
        const todo= await TODO.find({});
        res.json({
            success: true,
            data: todo
        })
    }catch(err){
        res.status(500).json({message:err.message});
    }
}