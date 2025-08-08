const user=require("../models/model")

const getData=async (req,res)=>{
    try{
        response=await user.find()
        res.status(200).json(response)
    }catch(err){
        res.status(500).json(err.message)
    }
    
}

const postData=async (req,res)=>{
    try{
        const {name,age}=req.body
        const data=new user({name,age})
        response=await data.save()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err.message)
    }
}

const updateData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;

        const updatedUser = await user.findByIdAndUpdate(
            id,
            { name, age },
            { new: true, runValidators: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const deleteData=async (req,res)=>{
     try {
        const { id } = req.params;
        const deletedUser = await user.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports={getData,postData,updateData,deleteData}