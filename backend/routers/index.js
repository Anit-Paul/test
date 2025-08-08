const express=require('express')
const router=express.Router()
const controller=require("../controllers/index")

router.get("/data",controller.getData)
router.post("/data",controller.postData)
router.put("/data",controller.updateData)
router.delete("/data",controller.deleteData)

module.exports=router