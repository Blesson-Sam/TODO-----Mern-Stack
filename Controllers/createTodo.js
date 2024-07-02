

const TODO=require('../Models/todo');

exports.createTodo = async(req,res)=>{
    try{
        const{task,description}=req.body;

        const todo= await TODO.create({task,description});
        res.json({
            message:"Todo created successfully",
            todo
        })
    }catch(err){
        res.status(500).json({message:err.message});
    }
}