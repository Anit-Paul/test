const express=require('express')
const router=express.Router()
const controller=require("../controllers/index")

router.get("/data",controller.getData)
router.post("/data",controller.postData)
router.put("/data/:id",controller.updateData)
router.delete("/data/:id",controller.deleteData)

module.exports=router