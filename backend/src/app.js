
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookie = require('cookie-parser');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const unDia = 1000 * 60 * 60 *24;
dotEnv.config();


app.set("views", path.resolve(__dirname,"./views"));
app.use(express.static(path.join(__dirname, 'scripts')))
app.set("view engine","ejs");

app.use(session({
    secret: '123456789',
    cookie: {
        maxAge: unDia
    },
    saveUninitialized : true,
    resave: false 
}));

app.use(cookie());


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/scripts", express.static(path.resolve(__dirname,"../src/views/scripts")))
app.use("/css", express.static(path.resolve(__dirname,"../public/css")));
app.use("/images", express.static(path.resolve(__dirname,"../public/assets/images")));
app.use(require('./routes/home'));
app.use(require('./routes/product'));
app.use ((req, res , next) => {
    res.status(404).render("404NotFound")
})


app.listen(3000, () => console.log('Proyecto en el puerto 3000 '))

