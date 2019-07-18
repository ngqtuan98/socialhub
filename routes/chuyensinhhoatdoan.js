var express = require('express');
var router = express.Router();
//gọi controller
const chitiethoatdongController = require('../controller/chuyensinhhoatdongController');
/* GET home page. */
router.get('/', chitiethoatdongController.getchuyensinhhoatdong);

router.post('/dangkychuyensinhhoatdoan', chitiethoatdongController.postchuyensinhhoatdong);
module.exports = router;