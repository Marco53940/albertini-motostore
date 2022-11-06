


const renderHomeView = (req, res) => {
    return res.render('Home.ejs');
}

const renderCartView = (req, res) => {
    return res.render('Cart.ejs');
}

const renderLoginView = (req, res) => {
    return res.render('Login.ejs');
}

const renderRegisterView = (req, res) => {
    console.log('aca de nuevo');
    return res.render('Register',
    errores = []);
}




module.exports = {
    renderHomeView,
    renderLoginView,
    renderCartView,
    renderRegisterView
};