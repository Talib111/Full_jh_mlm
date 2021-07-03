var exp = require('express');
var cors = require('cors');
// const body_p = require('body-parser')
//it will run conn file automatically
require("./db/conn");
const Student = require("./src/models/students");
const Payout = require("./src/models/payouts");
const all_user = require("./src/models/All_user");
const Order = require("./src/models/Order");
const Withdraw = require("./src/models/Withdraw");
const All_data = require("./src/models/All_data");
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const session = require('express-session');
const hbs = require('express-handlebars');
const app = exp()
const mongoose = require("mongoose");

//for live hosting port, will automatically get the port
var port = process.env.PORT || 3000;


app.use(cors())
// app.use(body_p.json());
app.use(exp.json());


app.post('/push-all-data', (req,res)=>{

    //==1== first set check sponser has 2 1 or 0 then decide the side
    All_data.findOne({_id:req.body.sponser_Username},function(err, result){
        // res.send(result);
        // console.log(result);
        if(result){
            if(result.Team.direct_Team.length==0){
                var sponser_Side = "left";
                // res.send("left");
                create_Username(sponser_Side);
            }
            if(result.Team.direct_Team.length==1){
                var sponser_Side = "right";
                // res.send("right");
                create_Username(sponser_Side);

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

    //==2== creating username and side
    const create_Username = (sponser_Side)=>{
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
        const all_data = new All_data({_id:username3,sponser_Side:sponser_Side3,personal_info:req.body});
        all_data.save().then(()=>{
        // res.send("data is saved successfully")
        console.log('data is saved successfully')
        res.send(" user has been saved successfully");

        //add new member to all leaders sponsers as well as fill the direct team of current sponser
        // add_to_leader();
        update_sponser_data(username3)
    }).catch((e)=>{
        // res.send(e);
        console.log(e);
    })
   }

   //==4==updating data of sponser and leader sponser
   const update_sponser_data=(username4)=>{
    var i = req.body.sponser_Username;
    //update the details of current sponser
    
        // var newval = {$set: {Team.4.direct_Team:[]}};//set the pushed array here
        All_data.findByIdAndUpdate({_id:i},newval,{new:true,useFindAndModify: false}).then(()=>{
            res.send("success")
        }).catch((e)=>{
            res.send(e);
        })
    
        
  

   }


// //code to add new mebers to leaders
// function add_to_leader(){
//     i = sponser_username.personal_Data.sponser_Username;
//     j = sponser_username.personal_Data.sponser_Side;
//     if(j=="left"){
//         a = "left_Team"
//     }
//     else{
//         a = "right_Team"
//     }
//     while(sponser_Username!=null){
//             //all working
//             //1 push member to my_team and left/right team

//             {.my_team: add_item(new member username),a: add_item(new member username)}//object key as varaible

//             i = i.personal_Data.sponser_Username;
//     }
// }
   
});

app.post('/get-order-data',function(req,res){
    Order.findOne({_id:req.body._id},function(err, result){
            res.send(result);
            // console.log(result);
            // if(result){
            //     // if(result.Team.direct_Team.length==0){
            //     //     var sponser_Side = "left";
            //     //     create_username(sponser_side)
            //     // }
            //     // if(result.Team.direct_Team.length==1){
            //     //     var sponser_Side = "right";
            //     //     create_username(sponser_side)
            //     // }
            //     // else{
            //     //     return("member cannot be added to this sponser because of full direct member");
            //     // }
            // }
        }).then(()=>{
            // res.send("value updated")
            console.log("inside then")
        }).catch((e)=>{
            res.send(e);
        });
});
app.post('/get-all-data',function(req,res){
    All_data.findOne({_id:req.body._id},function(err, result){
            res.send(result);
            // console.log(result);
            // if(result){
            //     // if(result.Team.direct_Team.length==0){
            //     //     var sponser_Side = "left";
            //     //     create_username(sponser_side)
            //     // }
            //     // if(result.Team.direct_Team.length==1){
            //     //     var sponser_Side = "right";
            //     //     create_username(sponser_side)
            //     // }
            //     // else{
            //     //     return("member cannot be added to this sponser because of full direct member");
            //     // }
            // }
        }).then(()=>{
            // res.send("value updated")
            console.log("inside then")
        }).catch((e)=>{
            res.send(e);
        });
});



app.listen(port,()=>{
    console.log(`nodes js is listening at ${port}`);
})

