const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin = require('../pattern/thongbao');
var doans = require('../models/doans');

exports.getchuyensinhhoatdong = (req, res, next) => {
    var sqlDoan = "select * from doans";
    connection.query(sqlDoan, (error, results, fieldds) => {
        if (error) {
            return console.error(error.message);
        }
        req.session.dsdoan = results;
    });

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
        res.render('dkchuyendoan', {
            ten: svten,
            lop: svlop,
            masv: svmasv,
            khoa: svkhoa,
            noivaodoan: req.session.dsdoan,
        });
    });
}

exports.postchuyensinhhoatdong = (req, res, next) => {
    var nvd = req.body.selectpicker;
    console.log(nvd);
    var ghichu = req.body.ghichu;
    var sql = "INSERT INTO chuyendoans (Id, ngayChuyen, tinhTrang, chucVu, flag_noti, ghiChu, id_doan, id_maSV) VALUES (?,now(),'Đang chờ xét duyệt','Đang chờ xét duyệt',1,?,?,?)";
    var query = connection.query(sql, ["CD" + req.session.mssv, ghichu, nvd, req.session.mssv], function (err, result) {
        console.log("Record Updated!!");
        console.log(result);
        res.redirect('/profile');
    });
}