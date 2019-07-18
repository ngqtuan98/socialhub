const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin = require('../pattern/thongbao');

exports.getchitiethoatdong = (req, res, next) => {
    var messages = '';
    res.render('user/login', { messages: messages });
}

exports.getIdchitiethoatdong = (req, res, next) => {
    if (req.session.Loggedin == true) {
        var Id = req.params.Id;
        console.log(Id)
        var sql = "select Id, tenHD, noiDung, image,  DATE_FORMAT(thoiGianDienRa,'%d/%m/%Y') AS TGDR, DATE_FORMAT(thoiGianDienRa,'%d/%m/%Y') AS TGKT, soNguoiDK from hoatdongs WHERE Id = ? && flag_del = 0 "
        connection.query(sql, [Id], (error, results, fields) => {
            if (error) {

                return console.error(error.message);
            }
            for (var i = 0; i < results.length; i++) {
                req.session.findHDId = results[i].Id;
                req.session.findHDImage = results[i].image;
                req.session.findHDTenHD = results[i].tenHD;
                req.session.findHDND = results[i].noiDung;
                req.session.TGDR = results[i].TGDR;
                req.session.TGKT = results[i].TGKT;
                req.session.soNguoiDK = results[i].soNguoiDK;
            }

        });

        var sqldk = "SELECT * FROM dkhoatdongs WHERE id_maSV = ?";
        var query = connection.query(sqldk, [req.session.mssv], function (err, result) {
            if (result.length > 0) {
                for (var i = 0; i < result.length; ++i) {
                    console.error("jfhkdfhsdjkfhdjksddsfsdfdsfsd: " + result[i].id_hoatDong)
                    if (result[i].id_hoatDong == Id) {
                        console.error("IDIDIDIDID: " + Id)
                        req.session.flag_dk = '1'
                        break;
                    }
                    else {
                        req.session.flag_dk = '0'
                    }
                }
            }
            else {
                req.session.flag_dk = '0'
            }
        });

        var sql = "select Id, tenHD, noiDung, image,  DATE_FORMAT(thoiGianDienRa,'%d-%m-%Y') AS TGDR, DATE_FORMAT(thoiGianKetThuc,'%d-%m-%Y') AS TGKT, soNguoiDK from hoatdongs where flag_del = 0 order by Id desc limit 6";
        connection.query(sql, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
          
            var findHDId = req.session.findHDId;
            var findHDImage = req.session.findHDImage;
            var findHDTenHD = req.session.findHDTenHD;
            var findHDND = req.session.findHDND;
            var TGDR = req.session.TGDR;
            var TGKT = req.session.TGKT;
            var soNguoiDK = req.session.soNguoiDK;
            var flag_dk = req.session.flag_dk;
            res.render('hoatdong/chitiethoatdong', {
                hoatdongChunks:results, findHDId: findHDId, findHDImage: findHDImage, findHDTenHD: findHDTenHD, findHDND: findHDND, TGDR: TGDR, TGKT: TGKT, soNguoiDK: soNguoiDK, flagdk: flag_dk
            });
        });
    } else {
        res.redirect('/');
    }
}

exports.getIddangkyhoatdong = (req, res, next) => {
    var Id = req.params.Id;
    console.log(Id);
    var sqlUD = "UPDATE hoatdongs set soNguoiDK = soNguoiDK - 1 WHERE Id = ?";
    var query = connection.query(sqlUD, [Id], function (err, result) {
        console.log("Record Updated!!");
        console.log(result);
    });
    if (req.session.Loggedin == true) {
        var IdHD = req.session.mssv + "DKHD" + Id;
        var sql = "INSERT INTO dkhoatdongs (Id,id_hoatDong, id_maSV,diemdanh,danhgia) VALUES (?, ?, ?,0,0)";
        connection.query(sql, [IdHD, Id, req.session.mssv], function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            res.redirect('/hoatdong');
        });
    }
    else {
        res.redirect('/');
    }
}