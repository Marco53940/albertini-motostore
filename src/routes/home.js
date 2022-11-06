const express = require('express');
const { renderCartView, renderHomeView, renderLoginView, renderProductsView, renderRegisterView } = require('../controllers/home');
const { login, logout, register, find } = require ('../controllers/user');
const validateUserData = require('../middlewares/register')
const {validateNoSession, validateSession} = require('../middlewares/session');
const router = express.Router();

router.get('/home', validateSession, renderHomeView);

router.get('/cart', renderCartView);

router.get('/login',validateNoSession, renderLoginView);

router.post('/login', login);

router.get('/register', renderRegisterView);

router.post('/register', validateUserData ,register, renderLoginView);

router.get('/api/find/id/:id', find);



module.exports = router;