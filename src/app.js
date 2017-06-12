'use strict'
const express = require('express')
const app = express()
const routes = require('./routes/routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const expressValidator = require('express-validator')
const cookieParser = require('cookie-parser')
const db = 'mongodb://localhost/blog'
const passport = require('passport')
const cors = require('cors')
mongoose.connect(db)

app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: false
}))

app.use(function (req, res, next) {
	if(req.session.user) {
		res.locals.user = req.session.user
	}
	else {
		res.locals.user = "You are not logged in"
	}
	next()
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator())
app.use(cookieParser())
app.set('view engine', 'pug')
app.set('views', __dirname + '/templates')
app.use('/', routes)
app.use(express.static(__dirname + '/public'))

//CORS Middleware
app.use(cors())

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())



app.listen(7000, function(){
	console.log('server is working on 7000 port')
})