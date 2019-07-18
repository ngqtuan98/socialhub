var express = require('express');
var router = express.Router();
var connection = require('../../models/connectdb');
/* GET home page. */

router.get('/', function (req, res) {
  var flag_del = '0';
  var sql = "select tenSV, maSV, lop, DATE_FORMAT(ngaySinh,'%d/%m/%Y') AS niceDate , noiSinh, phai, nganh, heDT, khoaHoc, sdt, email, vaoDoan, ngayVaoDoan, chucVu from sinhviens Where flag_del = ? ORDER BY maSV ASC ";
  connection.query(sql, [flag_del], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.render('admin/sinhvien', {
      results
    });
  });
});

router.get('/suasinhvien/:maSV', function (req, res) {
  var maSV = req.params.maSV;
  var sql = "select tenSV, maSV, lop, DATE_FORMAT(ngaySinh,'%d/%m/%Y') AS ngaySinh , noiSinh, phai, nganh, heDT, khoaHoc, sdt, email, vaoDoan, ngayVaoDoan, chucVu from sinhviens Where maSV = ? ";
  connection.query(sql, [maSV], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    for (var i = 0; i < results.length; ++i) {
      var svten = results[i].tenSV;
      var svngaysinh = results[i].ngaySinh;
      var svnoisinh = results[i].noiSinh;
      var svsdt = results[i].sdt;
      var svemail = results[i].email;
      var svvaoDoan = results[i].vaoDoan;
    }

    res.render('admin/sinhvien/editsinhvien', {
      ten: svten,
      ngaysinh: svngaysinh,
      noisinh: svnoisinh,
      sdt: svsdt,
      email: svemail,
      vaodoan: svvaoDoan,
      maSV: maSV
    });
  });
});

router.post('/capnhatsinhvien/:maSV', function (req, res) {
  var maSV = req.params.maSV;
  var name = req.body.name;
  var ngaysinh = req.body.ngaysinh;
  var noisinh = req.body.noisinh;
  var sdt = req.body.sdt;
  var email = req.body.email;
  var vaoDoan = req.body.selectpicker;
  var sqlUD = "UPDATE sinhviens set tenSV = ?, ngaySinh = ?, noiSinh = ?, sdt = ?, email = ?, vaoDoan= ? WHERE maSV = ? ";
  var query = connection.query(sqlUD, [name, ngaysinh, noisinh, sdt, email, vaoDoan, maSV], function (err, result) {
    console.log("Record Updated!!");
    console.log(result);
    res.redirect('/admin/sinhvien');
  })
})

router.get('/xoasinhvien/:maSV', function (req, res) {
  var maSV = req.params.maSV;
  res.render('admin/xacnhan/xacnhan', {
    maSV: maSV,
  });
});
router.post('/xoasinhvien/:maSV', function (req, res) {
  var maSV = req.params.maSV;
  if (maSV != null) {
    var sqlUD = "Update sinhviens set flag_del = 1 where maSV = ? ";
    var query = connection.query(sqlUD, [maSV], function (err, result) {
      console.log("Record Updated!!");
      console.log(result);
      res.redirect('/admin/sinhvien');
    });
  }
  else {
    res.render('admin/loi/loiFind')
  }
})

router.post('/timkiem', function (req, res) {
  var findmaSV = req.body.findmaSV;
  var flag_del = '0';
  var sql = "select tenSV, maSV, lop, DATE_FORMAT(ngaySinh,'%d/%m/%Y') AS niceDate , noiSinh, phai, nganh, heDT, khoaHoc, sdt, email, vaoDoan, ngayVaoDoan, chucVu from sinhviens Where maSV= ? && flag_del = ? ORDER BY maSV ASC ";
  connection.query(sql, [findmaSV, flag_del], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.render('admin/sinhvien', {
      results
    });
  });
})

router.get('/thongbao/:maSV', function (req, res) {
  var maSV = req.params.maSV;
  var sql = "select * from thongbaos order by Id desc limit 1 "
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.render('404', { error: error.message })
    }
    for (var i = 0; i < results.length; i++) {
      var Id = results[i].Id;
    }
    res.render('admin/sinhvien/thongbao', {
      maSV: maSV,
      Id: Id
    });
  });
});

router.post('/thongbao/:maSV', function (req, res) {
  var maSV = req.params.maSV;
  var Id = req.body.Id;
  var ten = req.body.ten;
  var noidung = req.body.noidung;
  var sql = "Insert into thongbaos (Id,tenTB, noiDung, id_maSV, flag_del) VALUES (?,?,?,?,0)"
  connection.query(sql, [Id,ten,noidung,maSV], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.redirect('/admin/sinhvien');
  });
})
module.exports = router;