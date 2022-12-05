
const validateSession = (req, res, next) => {

    console.log(req.session.userData);

    if (!req.session.userData) {
        return res.send(401);
    }

    next();
}

const validateNoSession = (req, res, next) => {

    if (req.session.userData) {
        return res.redirect('/home');
    }

    next();
}



module.exports = {
    validateSession,
    validateNoSession    
}