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
const All_dt = require("./src/models/All_data");
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const session = require('express-session');
const hbs = require('express-handlebars');
const app = exp()
const mongoose = require("mongoose");
const {authPage} = require('./User_role');

//for live hosting port, will automatically get the port
var port = process.env.PORT || 3000;


app.use(cors())
// app.use(body_p.json());
app.use(exp.json());


// mongoose.connect("mongodb://localhost:27017/node-auth-yt", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });

// const UserSchema = new mongoose.Schema({
// 	username: {
// 		type: String,
// 		required: true
// 	},
// 	password: {
// 		type: String,
// 		required: true
// 	}
// });

// const User = mongoose.model('User', UserSchema);

// /////for login authentication/////
// app.use(session({
// 	secret: "verygoodsecret",
// 	resave: false,
// 	saveUninitialized: true
// }));
// app.use(exp.urlencoded({ extended: false }));

// // Passport.js
// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function (user, done) {
// 	done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
// 	User.findById(id, function (err, user) {
// 		done(err, user);
// 	});
// });

// passport.use(new localStrategy(function (username, password, done) {
// 	User.findOne({ username: username }, function (err, user) {
// 		if (err) return done(err);
// 		if (!user) return done(null, false, { message: 'Incorrect username.' });

// 		bcrypt.compare(password, user.password, function (err, res) {
// 			if (err) return done(err);
// 			if (res === false) return done(null, false, { message: 'Incorrect password.' });
			
// 			return done(null, user);
// 		});
// 	});
// }));



// app.get('/logout', function (req, res) {
// 	req.logout();
// 	res.redirect('/');
// });


// function isLoggedOut(req, res, next) {
// 	if (!req.isAuthenticated()) return next();
// 	// res.redirect('/');
// 	res.send("wrong credentails")
// }



// function isLoggedIn(req, res, next) {
// 	if (req.isAuthenticated()) return next();
// 	// get.login will be called from here
// 	res.redirect('/login');
// }


// //=============================working code=========================================//
// // ROUTES------working done
// // call /login-status to check user login status and transfer to homepage if success or transfer to login page if fails
// app.get('/', isLoggedIn, (req, res) => {
// 	// res.render("index", { title: "Home" });
// 	res.send("welcome user")
// });

// //this login will be called user is not logged in 
// app.get('/login', isLoggedOut, (req, res) => {
// 	const response = {
// 		title: "Login",
// 		error: req.query.error
// 	}
// 	// res.render('login', response);
// 	// console.log(res.body);
// 	res.send("logout is executed");
// });

// //first login part which accept value from req.body automatically and send to / on success-----working done
// app.post('/login', passport.authenticate('local', {
// 	successRedirect: '/',
// 	// successRedirect: '/',
// 	 failureRedirect: '/login?error=true'
// }));


// // signing up this code is working-----working done
// //making problem in the absense of async await becaust exits runs after savning the data which created th problem
// app.post('/setup',async (req, res) => {
// 	const exists = await User.exists({username: req.body.username});

// 	if (exists) {
// 		res.send('user already exists');
// 		console.log(req.body.username)
// 		return;
// 	};

// 	bcrypt.genSalt(10, function (err, salt) {
// 		if (err) throw err;
// 		bcrypt.hash(req.body.password, salt, function (err, hash) {
// 			// if (err) throw err;
			
// 			const newAdmin = new User({
// 				username: req.body.username,
// 				password: hash
// 			});

// 			newAdmin.save().then(()=>{
// 				res.send("user created")
// 			}).catch((e)=>{
// 				res.send(e);
// 			});
		

// 			// res.redirect('/login');
//             // res.send("user created scueessfully");
// 		});
// 	});
// });

///////////////////////////////

// app.post('/',(req,res)=>{
   
//     console.log(req.body.account_Holder," ",req.body.account_no," ",req.body.ifsc_Code,req.body._id);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.send(user)
//     }).catch((e)=>{
//         res.send(e);
//     })

//     // res.send(req.body); 
// });

// app.post('/add-user',(req,res)=>{
   
//     // console.log(req.body.direct_payout," ",req.body.matching_payout," ",req.body.closing_payout);
//     const user = new all_user(req.body);
//     user.save().then(()=>{
//         res.send(user)
//     }).catch((e)=>{
//         res.send(e);
//     })

//     // res.send(req.body); 
// });
// app.post('/update-user',(req,res)=>{
   
//     var newval = {$set: req.body};
//     all_user.findByIdAndUpdate({_id:"hulk_106"},newval,{new:true,useFindAndModify: false}).then(()=>{
//         res.send("value updated")
//     }).catch((e)=>{
//         res.send(e);
//     })

//     // res.send(req.body); 
// });

// // get data from user with unique id
// app.get('/get_all',(req,res)=>{
   
//     // var newval = {$set: req.body};
//     all_user.findOne({_id:"hulk_110"},function(err, result){
//         res.send(result);
//     }).then(()=>{
//         res.send("value updated")
//     }).catch((e)=>{
//         res.send(e);
//     })

//     // res.send(req.body); 
// });

// // save order record
// app.post('/order-record',(req,res)=>{
   
//     // console.log(req.body.direct_payout," ",req.body.matching_payout," ",req.body.closing_payout);
//     const order = new Order(req.body);
//     order.save().then(()=>{
//         res.send(order)
//     }).catch((e)=>{
//         res.send(e);
//     })

//     // res.send(req.body); 
// });


// // get order-record
// app.post('/get-order-record',(req,res)=>{
   
//     // var newval = {$set: req.body};
//     Order.findOne({_id:req.body._id},function(err, result){
//         res.send(result);
//     }).then(()=>{
//         res.send("value updated")
//     }).catch((e)=>{
//         res.send(e);
//     })

//     // res.send(req.body); 
// });


// // withdraw record
// app.post('/withdraw-record',(req,res)=>{
   
//     // console.log(req.body.direct_payout," ",req.body.matching_payout," ",req.body.closing_payout);
//     const withdraw = new Withdraw(req.body);
//     withdraw.save().then(()=>{
//         res.send(withdraw)
//     }).catch((e)=>{
//         res.send(e);
//     })

//     // res.send(req.body); 
// });


// // get withdraw-record
// app.post('/get-withdraw-record',(req,res)=>{
   
//     // var newval = {$set: req.body};
//     Withdraw.findOne({_id:req.body._id},function(err, result){
//         res.send(result);
//     }).then(()=>{
//         res.send("value updated")
//     }).catch((e)=>{
//         res.send(e);
//     })

//     // res.send(req.body); 
// });

////////////////////////////////////////
/////////////////////////////////////
//****All data model pushing data */


// app.post('/test-auth',authPage(["talib","mark"]),(req,res)=>{
//     res.send("you have access to site");
// })
// app.post('/push-all-data',async (req,res)=>{

//     const all_Data = new All_data(req.body);
//     all_Data.save().then(()=>{
//         res.send("success")
//     }).catch((e)=>{
//         res.send(e);
//     })
   
// });

app.post('/push-all-data',async (req,res)=>{

    //==1== first set check sponser has 2 1 or 0 then decide the side
    // All_dt.findOne({_id:req.body.sponser_Username},function(err, result){
    //     // res.send(result);
    //     // console.log(result);
    //     if(result){
    //         if(result.Team.direct_Team.length==0){
    //             var sponser_Side = "left";
    //             create_username(sponser_side)
    //         }
    //         if(result.Team.direct_Team.length==1){
    //             var sponser_Side = "right";
    //             create_username(sponser_side)
    //         }
    //         else{
    //             return("member cannot be added to this sponser because of full direct member");
    //         }
    //     }
    // }).then(()=>{
    //     // res.send("value updated")
    //     console.log("inside then")
    // }).catch((e)=>{
    //     res.send(e);
    // })

    // //==2== create username
    // var username = res.First_name.concat(res.Last_name.concat("@jhf"));
    // //findone username and check username exits or not
    // //if exist(
    //     username = res.First_name.concat(res.Last_name.concat("9@jhf"))
    // )
    // esle{
    //     save_data()
    // }

    //==3== create hash of password and save data

//    function save_data(){
        const all_Data = new All_data(req.body);
    all_Data.save().then(()=>{
        res.send("success")
        //add new member to all leaders
        add_to_leader();
    }).catch((e)=>{
        res.send(e);
    })
//    }


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




//updating data in all data
//for new signups
app.post('/update-all-data',(req,res)=>{
   
    var newval = {$set: req.body};
    All_data.findByIdAndUpdate({_id:req.body._id},newval,{new:true,useFindAndModify: false}).then(()=>{
        res.send("success")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});

//getting data from all data 
app.post('/get-all-data',(req,res)=>{
   
    console.log(req.body._id);
    // var newval = {$set: req.body};
    All_data.findOne({_id:req.body._id},function(err, result){
        res.send(result);
    }).then(()=>{
        res.send("value updated")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});

//get Specific data 
app.post('/get-asked-data',(req,res)=>{
   
    // var newval = {$set: req.body};
    All_data.findOne({_id:req.body._id},function(err, result){
        res.send(result);
    }).then(()=>{
        res.send("value updated")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});


//get all products
app.post('/get-all-products',(req,res)=>{
   
    // var newval = {$set: req.body};
    All_data.findOne({_id:req.body._id},function(err, result){
        res.send(result);
    }).then(()=>{
        res.send("value updated")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});

///////////////////////////////****for admin****////////////////////////////////////
//post products
app.post('/push-products',async (req,res)=>{

    // console.log(req.body.direct_payout," ",req.body.matching_payout," ",req.body.closing_payout);
    const all_Data = new All_data(req.body);
    all_Data.save().then(()=>{
        res.send("success")
    }).catch((e)=>{
        res.send(e);
    })
   
    // res.send(req.body); 
});

//updating data in all data
app.post('/update-products',(req,res)=>{
   
    var newval = {$set: req.body};
    All_data.findByIdAndUpdate({_id:req.body._id},newval,{new:true,useFindAndModify: false}).then(()=>{
        res.send("success")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});

//updating data in all data
app.post('/delete-products',(req,res)=>{
   
    var newval = {$set: req.body};
    All_data.findByIdAndUpdate({_id:req.body._id},newval,{new:true,useFindAndModify: false}).then(()=>{
        res.send("success")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});

//get all user's info
//getting data from all data 
app.post('/get-all-user',(req,res)=>{
   
    // var newval = {$set: req.body};
    All_data.findOne({_id:req.body._id},function(err, result){
        res.send(result);
    }).then(()=>{
        res.send("value updated")
    }).catch((e)=>{
        res.send(e);
    })

    // res.send(req.body); 
});

///temporary login////
app.post('/temp-login', (req,res)=>{
   
    // // var newval = {$set: req.body};
    All_data.findOne({_id:req.body._id},function(err, result){
        // if(err) throw err;
        // console.log(result.);
        if(result){
            res.send("success");
        }
        else{
            res.send("user not found");
        }
    }).then(()=>{
     
    }).catch((e)=>{
        res.send(e);
    })

});

app.listen(port,()=>{
    console.log(`nodes js is listening at ${port}`);
})

