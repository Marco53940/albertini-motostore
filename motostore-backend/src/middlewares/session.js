
const validateSession = (req, res, next) => {

    console.log(req.session.userData);

    if (!req.session.userData) {
        return res.render('401NotAuthorized');
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