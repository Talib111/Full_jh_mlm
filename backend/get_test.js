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

////////===============================================================//////////////
////////====================1 new member id generating===================//////////////
////////===============================================================//////////////
app.post('/push-all-data', (req,res)=>{

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
        const all_data = new All_data({_id:username3,sponser_Side:sponser_Side3,personal_info:req.body});
        all_data.save().then(()=>{
        // res.send("data is saved successfully")
        console.log('data is saved successfully')
        // res.send(" user has been saved successfully");

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
    while(i!="null"){
        
        // var newval = {$set: {Team.direct_Team:[]}};//set the pushed array here
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

////////===============================================================//////////////
////////====================/new member id generating===================//////////////
////////===============================================================//////////////


////////===============================================================//////////////
////////====================2 ORDER PLACEMENT CALL===================//////////////
////////===============================================================//////////////

app.post('/place-order', (req,res)=>{

    //==1== razorpay order payment
    //after confirmation of payment and got transaction id go for next step otherwise return error
    //


    //==2== push order details in admin order model 
    const order = new Order({_id:req.body._id,date:date.now(),
        order_ref_no:razorpay_order_ref_no,
        product_Name:req.body.product_Name,
        product_Qty:req.body.product_Qty,
        grand_Total:razorpay.grand_Total,
        payment_Status:razorpay_status});

        order.save().then(()=>{
            console.log('order is saved successfully')
    
            save_user_Order();
        }).catch((e)=>{
            // res.send(e);
            console.log(e);
        })
    //==3== push order details in user order properties
    const save_user_Order = ()=>{
        

            var newval = {$push: {date:date.now(),
                order_ref_no:razorpay_order_ref_no,
                product_Name:req.body.product_Name,
                product_Qty:req.body.product_Qty,
                grand_Total:razorpay.grand_Total,
                payment_Status:razorpay_status}};//set the pushed array here
        All_data.findByIdAndUpdate({_id:req.body._id},newval,{new:true,useFindAndModify: false}).then(()=>{
            // res.send("sponser data has been updated")
            update_sponser_order_data();
        }).catch((e)=>{
            res.send(e);
        })

    }
//     //==4==update payouts including calculations for payout and reports in all uplevel sponser
//    const update_sponser_order_data=()=>{
//     var i = req.body.sponser_Username;
//     //update the details of current sponser
//     while(i!="null"){
        
//         // var newval = {$set: {Team.direct_Team:[]}};//set the pushed array here
//         All_data.findByIdAndUpdate({_id:i},newval,{new:true,useFindAndModify: false}).then(()=>{
//             // res.send("sponser data has been updated")
//         }).catch((e)=>{
//             res.send(e);
//         })

//         //find the uplevel sponser name until null
//         All_data.findOne({_id:i},function(err, result){
            
//             if(result){
//                 i = result;
    
//             }
//             else{
//                 res.send("sponser does not exits");
//             }
//         }).then(()=>{
//             // res.send("value updated")
//             // console.log("inside then")
//         }).catch((e)=>{
//             res.send(e);
//         });

//     }
    
//         //after exit the loop on null count
//             res.send("sponser data has been updated")
  

//    }

//==6== generate invoice download link with button to download
//==7== after successful confirmation of everything send user invoice in email & send sms


   
});
////////===============================================================//////////////
////////====================/ ORDER PLACEMENT CALL===================//////////////
////////===============================================================//////////////

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

