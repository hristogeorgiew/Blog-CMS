const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const User = require("../models/User");
const CreateToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET, {
        expiresIn: '7d',
    });
}

//validations
module.exports.registerValidations = [
    body("name").not().isEmpty().trim().withMessage("Name is reqired"),
    body("email").not().isEmpty().trim().withMessage("Email is reqired"),
    body("password").isLength({min: 6}).withMessage("Password mus be 6 characters long")
];

//register User
module.exports.register = async (req, res) => {
    const {name, email, password} = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
       return res.status(400).json({ errors: errors.array() });
    } 

    try {
        const checkUser = await User.findOne({ email });

        if(checkUser){
            return res
            .status(400)
            .json({errors: [{msg: 'Email is already taken'}]});
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        try {
            const user = await User.create({
                name,
                email,
                password: hash,
            });

            const token = CreateToken(user);

            return res
                .status(200)
                .json({msg: 'Your account has been created', token});

        } catch (error) {
            return res.status(500).json({errors: error})
        }

    } catch (error) {
        return res.status(500).json({errors: error})
    }
}

//Validation Login
module.exports.loginValidations = [
    body("email").not().isEmpty().trim().withMessage("Email is reqired"),
    body("password").not().isEmpty().withMessage("Password is reqired")
];

//Login User
module.exports.login = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({email});

        if(user){
            const matchhed = await bcrypt.compare(password, user.password);
            if(matchhed){

                const token = CreateToken(user);
                return res
                    .status(200)
                    .json({msg: 'You have login successfully', token});

            } else {

                return res
                    .status(401)
                    .json({errors: [{msg: 'Password is not correct'}]});
            
            }
        
        } else {
            return res.status(404).json({errors: [{msg: 'Email is not found'}]});
        }

    } catch (error) {
        return res.status(500).json({errors: error})
    }
}