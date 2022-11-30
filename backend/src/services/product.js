const fs = require('fs');
const path = require('path');

const readProducts = () => {

    const products = fs.readFileSync(path.resolve(__dirname,"../database/products.json"));

    console.log('productos leidos con exito');

    return JSON.parse(products);

}

const readProduct = (id) => {

    const products = readProducts();

    const product = products.filter((p) => p.id == id);

    return product;

}

const createProduct = (product) => {

    const products = readProducts();

    const lastProductId = products[products.length - 1].id;

    products.push({
        id: lastProductId + 1,
        ...product
    });

    fs.writeFileSync(path.resolve(__dirname,"../database/products.json"), JSON.stringify(products));
    console.log('producto creado con exito');

}

const deleteProduct = (id) => {

    const products = readProducts();

    const newProduct = products.filter(p => p.id != id);

    fs.writeFileSync(path.resolve(__dirname,"../database/products.json"), JSON.stringify(newProduct));

}

const productExists = (id) => {

    const products = readProducts();

    const product = products.filter(p => p.id == id);

    if (product.length == 0) {
        return false;
    }

    return true;

}

module.exports = {
    readProducts,
    readProduct,
    createProduct,
    deleteProduct,
    productExists
}