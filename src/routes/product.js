const express = require('express');
const { getAll, getOne, create, update, deleteOne, renderProductView, renderProductsView } = require('../controllers/product');
const router = express.Router();


router.get('/products', renderProductsView);

router.get('/products/:id', getOne);

router.get('/product/:id', renderProductView);

router.post('/products', create);

router.put('/products/:id', update);

router.patch('/products/:id', update);

router.delete('/products/:id', deleteOne);

module.exports = router;