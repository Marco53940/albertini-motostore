
const validateSession = (req, res, next) => {

    if (!req.session.userData) {
        return res.redirect('/login');
    }

    next();
}

const validateNoSession = (req, res, next) => {

    if (req.session.userData) {
        return res.redirect('/home');
    }

    next();
}

const registerUser = (req, res, next) => {
    
}

module.exports = {
    validateSession,
    validateNoSession
}