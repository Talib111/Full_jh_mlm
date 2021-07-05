const express = require('express');
const router = express.Router();



router.post('/',(req,res)=>{
   
    var newval = {$set: req.body};
    All_data.findByIdAndUpdate({_id:req.body._id},newval,{new:true,useFindAndModify: false}).then(()=>{
        res.send("success")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});

module.exports = router;