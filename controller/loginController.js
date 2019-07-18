const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin= require('../pattern/thongbao');

exports.getLogin = (req, res, next) => {
	res.render('user/login',{ messages: thongBaoLogin.noti=''});
}

exports.postLogin = (req, res, next) => {
    var mssv = req.body.mssv;
    var password = req.body.password;
    var user = new Checklogin(mssv, password);
    var login = new Login();
    var kq = login.Checklogin(user)
    console.log("kết quả trả về: " + kq)
    if (kq == true) {
        connection.query('SELECT * FROM logins WHERE id_maSV = ? AND password = ?', [mssv, password], function (error, results, fields) {
            if (results.length > 0) {
                req.session.Loggedin = true;
                req.session.mssv = mssv;
                for (var i = 0; i < results.length; i++) {
                    var flg = results[i].flag_FLogin;
                    if (flg == 1) {
                        res.redirect('/doimatkhau');
                    }
                    if (flg == 0) {
                        res.redirect('/trangchu');
                    }
                }
                console.log("ket qua la " + flg);
            } else {

                thongBaoLogin.noti = 'Incorrect Mssv and/or Password!';
                res.render('user/login', { messages: thongBaoLogin.noti });
            }
            res.end();
        });
    } else {
        thongBaoLogin.noti = 'Bạn chưa điền thủ thông tin!';
        res.render('user/login', { messages: thongBaoLogin.noti });
    }
}