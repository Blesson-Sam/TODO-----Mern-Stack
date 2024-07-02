

const Todo=require("../Models/todo");


exports.deleteTodo=async(req,res)=>{
    try{

        const {id}=req.params;
        await Todo.findByIdAndDelete(id);
        res.json(
            {
                success:true,
                data:"Todo Deleted Successfully",
            });

        
    }
    catch(err){
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"Internal Server Error",
                message:err.message,
            })
        }
}