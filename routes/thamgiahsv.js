var express = require('express');
var router = express.Router();
// controller
const dangkyHSVController = require('../controller/dangkyHSVController')
/* GET home page. */

router.get('/', dangkyHSVController.getDangKyHSV);
router.post('/thamgiahoisinhvien', dangkyHSVController.postDangKyHSV);
module.exports = router;