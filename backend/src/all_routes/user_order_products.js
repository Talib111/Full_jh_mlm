const express = require('express');
const router = express.Router();




router.post('/', (req,res)=>{

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

module.exports = router;