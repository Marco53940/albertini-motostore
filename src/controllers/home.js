


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
    return res.render('Register.ejs');
}




module.exports = {
    renderHomeView,
    renderLoginView,
    renderCartView,
    renderRegisterView
};