const express = require('express');
const router = express.Router();
const All_dt = require("../models/All_data");




router.post('/',(req,res)=>{
   
    console.log(req.body._id);
    var table_json=[];
    // var newval = {$set: req.body};
    All_data.findOne({_id:req.body._id},function(err, result){
        var team_array = result.Team.my_Team;
        var i;
        for(i=0;i<=team_array-1;i++){

            //find team data value
            All_data.findOne({_id:team_array[0]},function(err, result2){
                table_json = [{table_json},{_id:result2._id,date_of_joining:result2.date_Of_Joining}];

            }).then(()=>{
                res.send("value updated")
            }).catch((e)=>{
                res.send(e);
            })
        }
        res.send(table_json);
    }).then(()=>{
        res.send("value updated")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});

module.exports = router;