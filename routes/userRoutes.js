const app = require('express');
const router = app.Router();
const { register, registerValidations } = require('../controllers/userControler');

//use middleware
router.post("/register", registerValidations, register);

module.exports = router; 