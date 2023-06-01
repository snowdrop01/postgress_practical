const express = require('express')
const bodyParser = require('body-parser')
const app =  express()
const dotenv = require('dotenv')
dotenv.config()
const port =  process.env.PORT
const nodemailer = require("nodemailer");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

app.set('view engine','ejs');
const path= require('path') 




app.locals.moment = require('moment');

const sequelize = require('./util/pgdb');
const userRoutes = require('./routes/user.route')
const serviceRoutes = require('./routes/service.route')
const Users = require('./models/user.model')
const Service = require('./models/service.model')

// user.hasOne(service);
// service.belongsTo(user);
// // Inner join                                                                                                                                                                                                                                                                                                                   
// user
//   .findAll({
//     include : [{
//       model : detail,
//       required : true
//     }],
//   })
//   .then((result) => {
//     var result = result;
//     console.log("Inner Join");
//     console.log(JSON.stringify(result, null, 2));

//   })
//   .catch((err) => {
//     throw err;
//   });



app.use('/user', userRoutes)
app.use('/service',serviceRoutes)
app.use(express.static(path.join(__dirname, 'public')))

// user.hasMany(service);
// service.belongsTo(user);

Users.hasMany(Service);




sequelize.sync({force: true})
    .then(res => {
        // console.log(res);
        app.listen(port, () => {
            console.log(`App running on port http://localhost:${port}`)
        })
    })
    .catch(err => {
        console.log(err);
    })


app.get('/', (req, res) => {
    res.render('Welcome')
})
app.get('/service', (req, res) => {
    res.render('Service')
})
