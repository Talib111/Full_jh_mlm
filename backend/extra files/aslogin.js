// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
//   }
  
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
//   const methodOverride = require('method-override')

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  username => users.find(user => user.username === username)
  // id => users.find(user => user.id === id)
)

app.use(session({
  secret: "verygoodsecret",
  resave: false,
  saveUninitialized: true
}));

const users = []

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())
//   app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
  // res.render('index.ejs', { username: req.user.username })
  res.send("user is authenticated");
})

app.get('/login', checkNotAuthenticated, (req, res) => {
  // res.render('login.ejs')
  res.send("user is not authenticated")
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      // id: Date.now().toString(),
      // name: req.body.name,
      username: req.body.username,
      password: hashedPassword
    })
  //   res.redirect('/login')
  res.send("user created succcessfully")
  } catch {
  //   res.redirect('/register')
  res.send("user is not registerd")
  }
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

app.listen(3000, () => {
	console.log("Listening on port 3000");
});