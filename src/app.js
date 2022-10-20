
const express = require('express');
const app = express();
const path = require('path');

app.set("views", path.resolve(__dirname,"./views"));
app.set("view engine","ejs");

app.use("/css", express.static(path.resolve(__dirname,"../public/css")));
app.use("/images", express.static(path.resolve(__dirname,"../public/assets/images")));
app.use(require('./routes/home'));


app.listen(3000, () => console.log('Proyecto en el puerto 3000 ' +  path.resolve(__dirname,"../public")))

