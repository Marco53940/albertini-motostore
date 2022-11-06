const { body } = require('express-validator')



module.exports = [
    body('name').notEmpty().withMessage('Debes poner el nombre').bail().isLength({min: 3 }).withMessage('debe ser mayor a 3'),
    body('lastname').notEmpty().withMessage('Debes poner el apellido').bail().isLength({min: 3 }).withMessage('debe ser mayor a 3'),
    body('username').notEmpty().withMessage('Debes colocar el username').bail().isLength({min: 3 , max: 10}),
    body('password').notEmpty().withMessage('Debes colocar la password').bail().isLength({min: 5}).isAlphanumeric(),
    body('re_password').notEmpty().isLength({min: 5}).isAlphanumeric()
    .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
      }),
    body('email').notEmpty().withMessage('Debes colocar un email valido').bail().isEmail(),
    body('birthday').notEmpty().withMessage('Debes colocar una fecha valida').bail()
]