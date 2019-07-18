const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin = require('../pattern/thongbao');

exports.getTrangchu = (req, res, next) => {
    if (req.session.Loggedin == true) {
        var sql = "select * from thongbaos where flag_del = '0' && id_maSV = ? order by Id desc limit 1 ";
        connection.query(sql, [req.session.mssv], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                req.session.IdThongBao = results[i].Id;
                req.session.tenThongBao = results[i].tenTB;
                req.session.noiDung = results[i].noiDung;
            }
            req.session.ThongBao = results;
        })

        var sql = "select Id, tenHD, noiDung, image,  DATE_FORMAT(thoiGianDienRa,'%d/%m/%Y') AS TGDR, DATE_FORMAT(thoiGianKetThuc,'%d/%m/%Y') AS TGKT, soNguoiDK from hoatdongs where flag_del = 0 order by Id desc limit 1 ";
        connection.query(sql, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                req.session.Id = results[i].Id;
                req.session.tenHD = results[i].tenHD;
                req.session.image = results[i].image;
                req.session.TGDR = results[i].TGDR;
                req.session.TGKT = results[i].TGKT;
                req.session.soNguoiDK = results[i].soNguoiDK;
            }
        })

        var sql = "select * from dkHoatDongs where id_maSV = ?";
        connection.query(sql, [req.session.mssv], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            console.log(results);
            var Id = req.session.Id;
            var tenHD = req.session.tenHD;
            var image = req.session.image;
            var TGDR = req.session.TGDR;
            var TGKT = req.session.TGKT;
            var soNguoiDK = req.session.soNguoiDK;
            var idThongBao = req.session.IdThongBao;
            var thongBao = req.session.ThongBao;
            var tenThongBao = req.session.tenThongBao;
            var noiDung = req.session.noiDung;
            res.render('trangchu', {
                results, Id: Id, tenHD: tenHD, image: image, TGDR: TGDR, TGKT: TGKT, soNguoiDK: soNguoiDK, thongBao: thongBao, idThongBao:idThongBao,tenThongBao:tenThongBao,noiDung:noiDung
            });
        });
    } else {
        res.redirect('/');
    }
};


