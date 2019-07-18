var express = require('express');
var router = express.Router();
//gọi controller
const chitiethoatdongController=require('../controller/chitiethoatdongController');
/* GET home page. */

router.get('/', chitiethoatdongController.getchitiethoatdong);
router.get('/:Id', chitiethoatdongController.getIdchitiethoatdong);
router.get('/dangkyhoatdong/:Id',chitiethoatdongController.getIddangkyhoatdong);
module.exports = router;