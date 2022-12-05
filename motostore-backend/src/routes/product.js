const express = require('express');
const { getOne, create, update, deleteOne, renderProductView, renderProductsView, getAllProducts, getByName } = require('../controllers/product');
const router = express.Router();


router.get('/products', renderProductsView);

router.get('/allproducts', getAllProducts);

router.get('/products/:id', getOne);

router.get('/products/name/:name', getByName);

router.get('/product/:id', renderProductView);

router.post('/product', create);

router.put('/product/:id', update);

router.patch('/products/:id', update);

router.delete('/product/:id', deleteOne);

module.exports = router;