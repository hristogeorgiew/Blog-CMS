const app = require('express');
const router = app.Router();
const { register } = require('../controllers/userControler');

router.post("/register", register);

module.exports = router; 