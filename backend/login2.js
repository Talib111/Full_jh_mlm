const express = require('express');
const session = require('express-session');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const app	 = express();

mongoose.connect("mongodb://localhost:27017/node-auth-yt", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

const User = mongoose.model('User', UserSchema);


// // Middleware
// // app.engine('hbs', hbs({ extname: '.hbs' }));
// // app.set('view engine', 'hbs');
// // app.use(express.static(__dirname + '/public'));
// app.use(session({
// 	secret: "verygoodsecret",
// 	resave: false,
// 	saveUninitialized: true
// }));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

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

// function isLoggedIn(req, res, next) {
// 	if (req.isAuthenticated()) return next();
// 	res.redirect('/login');
// }

// function isLoggedOut(req, res, next) {
// 	if (!req.isAuthenticated()) return next();
// 	// res.redirect('/');
// 	res.send("wrong credentails")
// }

// // ROUTES
// app.get('/', isLoggedIn, (req, res) => {
// 	// res.render("index", { title: "Home" });
// 	res.send("welcome user")
// });

// app.get('/about', (req, res) => {
// 	res.render("index", { title: "About" });
// });

// app.get('/login', isLoggedOut, (req, res) => {
// 	const response = {
// 		title: "Login",
// 		error: req.query.error
// 	}

// 	// res.render('login', response);
// 	res.send("logout");
// });


// //first login part which accept value from req.body automatically
// app.post('/login', passport.authenticate('local', {
// 	successRedirect: '/',
// 	// successRedirect: '/',
// 	 failureRedirect: '/login?error=true'
// }));

// app.get('/logout', function (req, res) {
// 	req.logout();
// 	res.redirect('/');
// });

// // Setup our admin user
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
// 				res.send("user created scueessfully")
// 			}).catch((e)=>{
// 				res.send(e);
// 			});
		

// 			// res.redirect('/login');
//             // res.send("user created scueessfully");
// 		});
// 	});
// });
app.post('/login-test',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });


app.listen(3000, () => {
	console.log("Listening on port 3000");
});