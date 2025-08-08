const getData=(req,res)=>{
    res.status(200).json({message:"getData working"})
}

const postData=(req,res)=>{
    res.status(200).json({message:"postData working"})
}

const updateData=(req,res)=>{
    res.status(200).json({message:"putData working"})
}

const deleteData=(req,res)=>{
    res.status(200).json({message:"deleteData working"})
}

module.exports={getData,postData,updateData,deleteData}