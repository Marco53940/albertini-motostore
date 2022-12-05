const { readProducts, readProduct, createProduct, deleteProduct, productExists } = require("../services/product")
const productsdb =  require('../../models').Product;


const renderProductView = async (req, res) => {

    const { id } = req.params;

    if (id == null || id == "null") {
        return res.render('404NotFound.ejs');
    }

    const product = await productsdb.findOne({ where: { id: id } });

    if (!product) {
        return res.render('404NotFound.ejs');
    }

    return res.render('Detail_products.ejs', {
        product: product
    });

}

const renderProductsView = async (req, res) => {
    try{
        const products = await productsdb.findAll();
        console.log(products);
        if(!products) products = []
        return res.render('Products.ejs', {
            productos: products
        });
    }   
    catch (error){
        console.log(error);
    }
    return null;

}

const getAll = async (req, res) => {

    try{
        const products = await productsdb.findAll();
        console.log(products);
        if(!products) products = []
        return res.render('Products.ejs', {
            productos: products
        });
    }   
    catch (error){
        console.log(error);
    }
    return null;

}

const getAllProducts = async (req, res) => {

    try{
        const products = await productsdb.findAll();
        console.log(products);
        if(!products) products = []
        return res.status(200).json(products);
    }   
    catch (error){
        console.log(error);
    }
    return null;

}

const getOne = async (req, res) => {

    const { id } = req.params;

    if (id == null || id == "null") {
        return res.status(404).json({
            status: 'error',
            message: 'ID not valid'
        });
    }

    const product = await productsdb.findOne({ where: { id: id } });

    if (!product) {
        return res.render('404NotFound.ejs');
    }

    return res.status(200).json(product);

}

const getByName = async (req, res) => {

    const { name } = req.params;

    if (name == null || name == "null") {
        return res.status(404).json({
            status: 'error',
            message: 'ID not valid'
        });
    }

    const product = await productsdb.findOne({ where: { name: name } });

    if (!product) {
        return res.render('404NotFound.ejs');
    }

    return res.status(200).json(product);

}

const create = async (req, res) => {

    const { name, price, description, image } = req.body;

    console.log(name, price, description, image);

    const product = {
        name,
        price,
        description,
        image
    }

    try{
        await productsdb.create(product);
        return res.status(200).json(product);        
    }
    catch (error){
        return res.status(404).json({
            status: 'error',
            message: error
        });
    }



}

const update = async (req, res) => {

    const { name, price, description, image, id } = req.body;

    const product = {
        id,
        name,
        price,
        description,
        image
    }

    console.log(name, price, description, image, id);

    if (id == null || id == "null") {
        return res.status(404).json({
            status: 'error',
            message: 'ID not valid'
        });
    }

    try{
        await productsdb.update({
            name: name,
            price: price,
            image: image,
            description: description
        }, {
            where: {
                id: id,
            }
        });
        return res.status(200).json(product);
    }
    catch (error){
        return res.status(404).json({
            status: 'error',
            message: error
        });
    }
}

const deleteOne = async (req, res) => {

    const { id } = req.params;

    if (id == null || id == "null") {
        return res.status(404).json({
            status: 'error',
            message: 'ID not valid'
        });
    }

    try{
        await productsdb.destroy({
            where: { id: id },
          });
          return res.status(201).json({
            status: 'success',
            message: 'product deleted'
        });
    }
    catch (error){
        return res.status(404).json({
            status: 'error',
            message: error
        });
    }

}

const deleteAll = async (req, res) => {


    try{
        productsdb.destroy( {where:{} }, {truncate: true} ). then(() => { return res.status(201).json({
            status: 'success',
            message: 'products deleted'
        }); }). then(() => {});
        
    }
    catch (error){
        return res.status(404).json({
            status: 'error',
            message: error
        });
    }

}


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
    renderProductView,
    renderProductsView,
    getAllProducts,
    getByName,
    deleteAll
}
