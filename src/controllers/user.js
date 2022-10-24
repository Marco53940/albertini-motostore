
const bcrypt = require('bcrypt');
const users = require('../services/user');


const login = (req, res) => {

    const { usernameOrEmail, password } = req.body;

    const user = users.filter(u => u.email === usernameOrEmail || u.username === usernameOrEmail);

    if (user.length == 0) {
        return res.send('Usuario incorrecto');
    }

    const userData = user[0];

    const isValidPassword = bcrypt.compareSync(password, userData.password);

    if (!isValidPassword) {
        return res.send('Contraseña incorrecta');
    }

    delete userData.password; 

    req.session.userData = userData; 

    return res.redirect('/home');

}

const register = (req,res) => {
    
}


const logout = (req, res) => {

    req.session.destroy();

    return res.redirect('/login');
}

module.exports = {
    login,
    logout
};