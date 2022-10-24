const express = require('express');
const { renderCartView, renderHomeView, renderLoginView, renderProductsView, renderRegisterView } = require('../controllers/home');
const { login, logout } = require ('../controllers/user');
const {validateNoSession, validateSession} = require('../middlewares/user');
const router = express.Router();

router.get('/home', validateSession, renderHomeView);

router.get('/cart', renderCartView);

router.get('/login',validateNoSession, renderLoginView);

router.post('/login', login);

router.get('/register', renderRegisterView);




module.exports = router;