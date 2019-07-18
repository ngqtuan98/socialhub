var express = require('express');
var router = express.Router();
var connection = require('../models/connectdb');
//gọi controller
const loginController = require('../controller/loginController');
const doiMatKhauController = require('../controller/doimatkhauController');
const signupController = require('../controller/signupController');
const trangchuController = require('../controller/trangchuController');
const kenhthongtinController = require('../controller/kenhthongtinController');
const contactController = require('../controller/contactController');
const xacnhanController = require('../controller/xacnhanController');
/* GET home page. */

router.get('/', loginController.getLogin);
router.get('/trangchu', trangchuController.getTrangchu);
router.get('/xacnhan/:Id', xacnhanController.getXacnhan);
router.get('/contact', contactController.getContact);
router.get('/kenhthongtin', kenhthongtinController.getKenhThongTin);
router.post('/login', loginController.postLogin);
router.get('/doimatkhau', doiMatKhauController.getDoiMatKhau);
router.post('/doimatkhau', doiMatKhauController.postDoiMatKhau);
router.get('/capnhatthongtin',signupController.getSignup);
router.post('/formcapnhatthongtin',signupController.postDoiMatKhau);

module.exports = router;


