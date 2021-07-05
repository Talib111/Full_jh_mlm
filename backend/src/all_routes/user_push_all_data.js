const express = require('express');
const All_dt = require("../models/All_data");

const router = express.Router();



router.post('/', (req,res)=>{

    //==1== first set check sponser has 2 1 or 0 then decide the side
    All_data.findOne({_id:req.body.sponser_Username},function(err, result){
        // res.send(result);
        // console.log(result);
        if(result){
            if(result.Team.direct_Team.length==0){
                var sponser_Side = "left";
                // res.send("left");
                make_Username(sponser_Side);
            }
            if(result.Team.direct_Team.length==1){
                var sponser_Side = "right";
                // res.send("right");
                make_Username(sponser_Side);

            }
            else{
                res.send("sponser full");
            }
            // res.send(result);//cannot set headers after they are sent to clients

        }
        else{
            res.send("sponser does not exits");
        }
    }).then(()=>{
        // res.send("value updated")
        console.log("inside then")
    }).catch((e)=>{
        res.send(e);
    })

    //==2== make username and side
    const make_Username = (sponser_Side)=>{
        var sponser_Side2 = sponser_Side;
    var username2 = req.body.First_name.concat(req.body.Last_name.concat("@jhf"));
    //check if this username exist or not then make new if
    console.log(sponser_Side2," ",username2)
    save_all_data(sponser_Side2,username2);
    // test_check(sponser_Side2,username2);
    // console.log("data is ready to save");
    }
    
    // const test_check=(sponser_Side2,username2)=>{
    //     console.log('hello mr');
    // }

//     //==3== save data to all_data table
    //create hash of password working in sinup
     function save_all_data(sponser_Side3,username3){
        var username4 = username3;
        var i=1;
        //check username exists or not if not then save
        check_exists();
      const check_exists=()=>{
        const exists = User.exists({_id: req.body.username4});
      }
        if (exists) {
           username4 = username4.concat(i)
           i=i+1;
           check_exists();
        }
        else{
            const all_data = new All_data({_id:username3,sponser_Side:sponser_Side3,personal_info:req.body});
        all_data.save().then(()=>{
        console.log('data is saved successfully')

        //add new member to all leaders sponsers as well as fill the direct team of current sponser
        // add_to_leader();
        update_sponser_data(username4)
    }).catch((e)=>{
        // res.send(e);
        console.log(e);
    })
        }
        
   }

   //==4==updating data of sponser and leader sponser
   const update_sponser_data=(username4)=>{
    var i = req.body.sponser_Username;
    //update the details of current sponser
    while(i!="null"){
        
        // var newval = {$set: {Team.direct_Team:[]}};//set the pushed array here//update tree json also
        All_data.findByIdAndUpdate({_id:i},newval,{new:true,useFindAndModify: false}).then(()=>{
            // res.send("sponser data has been updated")
        }).catch((e)=>{
            res.send(e);
        })

        //find the uplevel sponser name until null
        All_data.findOne({_id:i},function(err, result){
            
            if(result){
                i = result;
    
            }
            else{
                res.send("sponser does not exits");
            }
        }).then(()=>{
            // res.send("value updated")
            // console.log("inside then")
        }).catch((e)=>{
            res.send(e);
        });

    }
    
        //after exit the loop on null count
            res.send("sponser data has been updated")
  

   }


   
});

module.exports = router;