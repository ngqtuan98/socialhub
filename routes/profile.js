var express = require('express');
var router = express.Router();

//gọi controller
const profileController=require('../controller/profileController');

/* GET users listing. */
router.get('/', profileController.getProfile);
module.exports = router;