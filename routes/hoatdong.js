var express = require('express');
var router = express.Router();
// controller
const hoatdongController = require('../controller/hoatdongController')
/* GET home page. */

router.get('/', hoatdongController.getHoatdong);
router.get('/hoatdongdangky', hoatdongController.getHoatdongDangKy);
router.post('/danhgia', hoatdongController.postDanhgia);
module.exports = router;