const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin = require('../pattern/thongbao');

exports.getDangKyHSV = (req, res, next) => {
    if (req.session.Loggedin == true) {
        var sql = "SELECT tenSV, maSV, lop, tenKhoa FROM  sinhviens as s  INNER JOIN khoas as k ON s.id_khoa = k.id WHERE maSV = ? "
        connection.query(sql, [req.session.mssv], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            for (var i = 0; i < results.length; ++i) {
                var svten = results[i].tenSV;
                var svmasv = results[i].maSV;
                var svlop = results[i].lop;
                var svkhoa = results[i].tenKhoa;
            }
            res.render('dkhsv', {
                ten: svten,
                lop: svlop,
                masv: svmasv,
                khoa: svkhoa,
            });
        });
    }
    else {
        res.redirect('/');
    }
}

exports.postDangKyHSV = (req, res, next) => {
    var select = req.body.selectpicker;
    if (select > 0) {
        var sql = "INSERT INTO dkhsvs (Id, ngayVaoHoi, tinhTrang, chucVu, id_maSV) VALUES (?,now(),'Đã đăng ký','Hội viên',?)";
        var query = connection.query(sql, ["HSV" + req.session.mssv, req.session.mssv], function (err, result) {
            console.log("Record Updated!!");
            console.log(result);
            res.redirect('/profile');
        });
    }
    else {
        res.redirect('/profile');
    }
}