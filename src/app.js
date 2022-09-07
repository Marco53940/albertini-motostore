const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/assets')));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/inicio-sesion',(req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
app.get('/carrito',(req,res) => {
    res.sendFile(path.join(__dirname, '/views/cart.html'));
});
app.get('/detalle-producto',(req,res) => {
    res.sendFile(path.join(__dirname, '/views/detailProduct.html'));
});
app.get('/registrarme',(req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.listen(3000, () => console.log('Proyecto en el puerto 3000'))