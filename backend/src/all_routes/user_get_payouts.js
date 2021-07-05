const express = require('express');
const router = express.Router();
const All_dt = require("../models/All_data");




router.post('/',(req,res)=>{
   
    console.log(req.body._id);
    // var newval = {$set: req.body};
    All_data.findOne({_id:req.body._id},function(err, result){
        //this will contain all payouts
        res.send(result.payouts);
    }).then(()=>{
        res.send("value updated")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});

module.exports = router;