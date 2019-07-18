var express = require('express');
var router = express.Router();
var connection = require('../../models/connectdb');
const multer = require('multer');
var uniqid = require('uniqid');

// Funtion  up image to server
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/hoatdongImage")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, true);
    }
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});
/* GET home page. */

router.get('/', function (req, res) {
    var flag_del = '0';
    var sql = "select Id, tenHD, noiDung, image,  DATE_FORMAT(thoiGianDienRa,'%d/%m/%Y') AS TGDR, DATE_FORMAT(thoiGianKetThuc,'%d/%m/%Y') AS TGKT, soNguoiDK,stt from hoatdongs WHERE flag_del = ? "
    connection.query(sql, [flag_del], (error, results, fields) => {
        if (error) {
            res.render('404', { error: error.message })
        }
        res.render('admin/hoatdong', {
            results
        });
    });
});

router.get('/themhoatdong', function (req, res) {
    var sql = "select * from hoatdongs order by Id desc limit 1 "
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.render('404', { error: error.message })
        }
        for (var i = 0; i < results.length; i++) {
            var Id = results[i].Id;
        }
        res.render('admin/hoatdong/themhoatdong', {
            Id: Id
        });
    });
});

router.post('/themhoatdong', upload.single('FileUploads'), function (req, res) {
    var Id = req.body.Id;
    if (Id.length != null) {
        var ten = req.body.ten;
        var noiDung = req.body.noiDung;
        var image = `/uploads/hoatdongImage/${req.file.filename}`; // `` dấu này để đổi dường link
        var TGDR = req.body.TGDR;
        var TGKT = req.body.TGKT;
        var soNguoiDK = req.body.soNguoiDK;
        var sql = "Insert into hoatdongs (Id,tenHD, noiDung, image, thoiGianDienRa, thoiGianKetThuc, soNguoiDK,flag_del) VALUES (?,?,?,?,?,?,?,0)"
        connection.query(sql, [Id, ten, noiDung, image, TGDR, TGKT, soNguoiDK], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            res.redirect('/admin/hoatdong');
        });
    }
    else {
        res.render('404');
    }
});

router.get('/suahoatdong/:Id', function (req, res) {
    var Id = req.params.Id;
    var sql = "select tenHD, noiDung, image,  DATE_FORMAT(thoiGianDienRa,'%Y-%m-%d') AS TGDR, DATE_FORMAT(thoiGianKetThuc,'%Y-%m-%d') AS TGKT, soNguoiDK from hoatdongs WHERE Id = ? "
    connection.query(sql, [Id], (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        for (var i = 0; i < results.length; ++i) {
            var ten = results[i].tenHD;
            var noiDung = results[i].noiDung;
            var image = results[i].image;
            var TGDR = results[i].TGDR;
            var TGKT = results[i].TGKT;
            var soNguoiDK = results[i].soNguoiDK;
        }
        res.render('admin/hoatdong/edithoatdong', {
            ten: ten,
            noiDung: noiDung,
            image: image,
            TGDR: TGDR,
            TGKT: TGKT,
            soNguoiDK: soNguoiDK,
            Id: Id
        });
    });
});

router.post('/capnhathoatdong/:Id', upload.single('FileUploads'), function (req, res) {
    console.log(req.file);
    var Id = req.params.Id;
    var ten = req.body.ten;
    var noiDung = req.body.noiDung;
    var image = `/uploads/hoatdongImage/${req.file.filename}`; // `` dấu này để đổi dường link
    var TGDR = req.body.TGDR;
    var TGKT = req.body.TGKT;
    var soNguoiDK = req.body.soNguoiDK;
    var sqlUD = "UPDATE hoatdongs set tenHD = ?, noiDung = ?, image = ?, thoiGianDienRa = ?, thoiGianKetThuc = ?, soNguoiDK = ? WHERE Id = ? ";
    var query = connection.query(sqlUD, [ten, noiDung, image, TGDR, TGKT, soNguoiDK, Id], function (err, result) {
        console.log("Record Updated!!");
        console.log(result);
        res.redirect('/admin/hoatdong');
    })
})

router.get('/xoahoatdong/:Id', function (req, res) {
    var Id = req.params.Id;
    res.render('admin/xacnhan/xacnhanhoatdong', {
        Id: Id,
    });
});

router.post('/xoahoatdong/:Id', function (req, res) {
    var Id = req.params.Id;
    if (Id != null) {
        var sqlUD = "Update hoatdongs set flag_del = 1 where Id = ? ";
        var query = connection.query(sqlUD, [Id], function (err, result) {
            if (err) {
                return console.error(err.message);
            }
            console.log("Record Updated!!");
            console.log(result);
            res.redirect('/admin/hoatdong');
        });
    }
    else {
        res.render('admin/loi/loiFind')
    }
})

router.get('/quanlydangky', function (req, res) {
    var sql = "select tenHD, id_maSV,diemdanh, danhgia, d.Id from dkhoatdongs d inner join hoatdongs h on d.id_hoatDong=h.Id"
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.render('404', { error: error.message })
        }
        res.render('admin/hoatdong/quanlydangky', {results});
    });
});

router.get('/diemdanh/:Id', function (req, res) {
    var Id = req.params.Id;
    res.render('admin/hoatdong/diemdanh', {
      Id: Id,
    });
  });
  router.post('/diemdanh/:Id', function (req, res) {
    var Id = req.params.Id;
    var select = req.body.selectpicker;
      var sqlUD = "Update dkhoatdongs set diemdanh = ? where Id= ? ";
      var query = connection.query(sqlUD, [select, Id], function (err, result) {
        console.log("Record Updated!!");
        console.log(result);
        res.redirect('/admin/hoatdong/quanlydangky');
      });
    });
module.exports = router;