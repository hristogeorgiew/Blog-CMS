const { body, validationResult } = require("express-validator");

module.exports.registerValidations = [
    body("name").not().isEmpty().trim().withMessage("Name is reqired"),
    body("email").not().isEmpty().trim().withMessage("Email is reqired"),
    body("password").isLength({min: 6}).withMessage("Password mus be 6 characters long")
];

module.exports.register = (req, res) => {
    const {name, emaill, password} = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.json(errors.array());
    } else {
        res.json('You have done');
    }
}
