const express = require('express');
const { renderCartView, renderHomeView, renderLoginView, renderProductsView, renderRegisterView } = require('../controllers/home');
const router = express.Router();

router.get('/home', renderHomeView);

router.get('/cart', renderCartView);

router.get('/login', renderLoginView);

router.get('/register', renderRegisterView);

router.get('/products', renderProductsView);



module.exports = router;