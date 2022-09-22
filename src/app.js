
const express = require('express');
const app = express();
const path = require('path');

app.set("views", path.resolve(__dirname,"./views"));
app.set("view engine","ejs");

app.use(express.static('public'));
app.use(require('./routes/cart'));
app.use(require('./routes/home'));
app.use(require('./routes/detail'));

app.listen(3000, () => console.log('Proyecto en el puerto 3000'))