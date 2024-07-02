



const TODO=require("../Models/todo");


exports.updateTodo=async(req,res)=>{
    try{

        const {id}=req.params;
        const{task,description}=req.body;
        const todo=await TODO.findByIdAndUpdate(
            {_id:id},
            {task,description,updatedAt:Date.now()},
        )
        if (!todo) {
            return res.status(404).json({
              success: false,
              message: 'Todo not found',
            });
          }
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:'Entry updated successfully'
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