const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin = require('../pattern/thongbao');

exports.getDoiMatKhau = (req, res, next) => {
    if (req.session.Loggedin = true) {
        res.render('user/doimatkhau');
    }
    else {
        res.redirect('/');
    }
}
exports.postDoiMatKhau = (req, res, next) => {
    if (req.session.Loggedin = true) {
        var pass = req.body.pass;
        var re_pass = req.body.re_pass;
        if (re_pass == pass) {
            var sql = "UPDATE logins set password =? WHERE id_maSV = ?";
            var query = connection.query(sql, [re_pass, req.session.mssv], function (err, result) {

                console.log("Record Updated!!");
                console.log(result);

            });
            res.redirect('/capnhatthongtin');
        }
        else {
            res.render('error/repass');
        }
    }
    else {
        res.redirect('/');
    }
}