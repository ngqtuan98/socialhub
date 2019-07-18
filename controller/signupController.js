const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin = require('../pattern/thongbao');

exports.getSignup = (req, res, next) => {
    if (req.session.Loggedin = true) {
        var flgLG = 0;
        var sqlCheck = "UPDATE logins set flag_FLogin = ?  WHERE id_maSV = ?";
        var query = connection.query(sqlCheck, [flgLG, req.session.mssv], function (err, result) {
            console.log("Record Updated!!");
            console.log("Đã qua bước 1: " + flgLG);
        });
        var sql = "select tenSV, lop, DATE_FORMAT(ngaySinh,'%d/%m/%Y') AS niceDate, tenKhoa from sinhviens s inner join khoas k on s.id_khoa = k.id WHERE maSV = ?"
        connection.query(sql, [req.session.mssv], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            console.log(results);
            for (var i = 0; i < results.length; ++i) {
                var svten = results[i].tenSV;
                var svlop = results[i].lop;
                var svngaysinh = results[i].niceDate;
                var svkhoa = results[i].tenKhoa;
            }
            res.render('signup', {
                ten: svten,
                lop: svlop,
                ngaysinh: svngaysinh,
                khoa: svkhoa
            });
        });
    }
    else {
        res.redirect('/');
    }
}
exports.postDoiMatKhau = (req, res, next) => {
    if(req.session.Loggedin = true)
	{
	var sdt = req.body.sdt;
	var email = req.body.email;
	var sql = "UPDATE sinhviens set sdt =? , email =?  WHERE maSV = ?";

	var query = connection.query(sql, [sdt, email, req.session.mssv], function (err, result) {
		console.log("Record Updated!!");

		console.log(result);
		res.redirect('trangchu');
	});
}
else {
    res.redirect('/');
  }
}