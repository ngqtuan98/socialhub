const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin = require('../pattern/thongbao');
exports.getXacnhan = (req, res, next) => {
    var Id = req.params.Id;
    var sqlUD = "UPDATE thongbaos set flag_del = '1' WHERE Id = ? && id_maSV =?";
    var query = connection.query(sqlUD, [Id, req.session.mssv], function (err, result) {
        console.log("Record Updated!!");
        console.log(result);
    });      
       res.redirect('/trangchu');
}