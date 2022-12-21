const express = require('express');
const { renderCartView, renderHomeView, renderLoginView, renderRegisterView } = require('../controllers/home');
const { login, login_user, register, find } = require ('../controllers/user');
const validateUserData = require('../middlewares/register')
const {validateNoSession, validateSession} = require('../middlewares/session');
const router = express.Router();

router.get('/home', renderHomeView);

router.get('/', renderHomeView);

router.get('/cart', validateSession, renderCartView);

router.get('/login',validateNoSession, renderLoginView);

router.post('/login', login);

router.post('/login-user', login_user);

router.get('/register', renderRegisterView);

router.post('/register', validateUserData, register, renderLoginView);

router.get('/api/find/id/:id', find);



module.exports = router;