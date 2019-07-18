const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin = require('../pattern/thongbao');

exports.getProfile = (req, res, next) => {
  if (req.session.Loggedin == true) {

    var sqlhsv = "select * from dkhsvs WHERE id_maSV = ? ";
    connection.query(sqlhsv, [req.session.mssv], (error, results, fieldds) => {
      if (error) {
        return console.error(error.message);
      }
      if (results.length > 0) {
        req.session.Flag_vaoHoi = '1';
      }
      if (results.length <= 0) {
        req.session.Flag_vaoHoi = '0';
      }
    });

    var sqlchuyendoan = "select * from chuyendoans WHERE id_maSV = ? ";
    connection.query(sqlchuyendoan, [req.session.mssv], (error, results, fieldds) => {
      if (error) {
        return console.error(error.message);
      }
      req.session.chuyendoan = results;
    });
    var sql = "select tenSV, maSV, lop, DATE_FORMAT(ngaySinh,'%d/%m/%Y') AS niceDate, noiSinh, phai, nganh, heDT, khoaHoc, sdt, email, vaoDoan, ngayVaoDoan, chucVu, tenKhoa from sinhviens s inner join khoas k on s.id_khoa = k.Id WHERE maSV = ?"
    connection.query(sql, [req.session.mssv], (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      for (var i = 0; i < results.length; ++i) {
        var svten = results[i].tenSV;
        var svmasv = results[i].maSV;
        var svlop = results[i].lop;
        var svngaysinh = results[i].niceDate;
        var svnoisinh = results[i].noiSinh;
        var svnganh = results[i].nganh;
        var svhedt = results[i].heDT;
        var svkhoahoc = results[i].khoaHoc;
        var svsdt = results[i].sdt;
        var svemail = results[i].email;
        var svkhoa = results[i].tenKhoa;
        if (results[i].phai == 'M') {
          var svphai = 'Nam'
        }
        if (results[i].phai == 'F') {
          var svphai = 'Nữ'
        }
        if (results[i].vaoDoan == '0') {
          console.log(results[i].vaoDoan);
          var svvaodoan = '0';
        }
        if (results[i].vaoDoan == '1') {
          console.log(results[i].vaoDoan);
          var svvaodoan = '1';
          var svngayvaodoan = results[i].ngayVaoDoan;
          var svchucvu = results[i].chucVu;
        }
        for (var i = 0; i < req.session.chuyendoan.length; ++i) {
          console.log(req.session.chuyendoan[i]);
          if (req.session.chuyendoan[i].flag_noti == 1) {
            var svvaodoan = '2';
            var tt = req.session.chuyendoan[i].tinhTrang;
          }
          if (req.session.chuyendoan[i].flag_noti == 0) {
            var svvaodoan = '3';
            var tt = req.session.chuyendoan[i].tinhTrang;
          }
        }
      }
      var vaoHoi=req.session.Flag_vaoHoi;
      res.render('profile', {
        ten: svten,
        lop: svlop,
        masv: svmasv,
        phai: svphai,
        ngaysinh: svngaysinh,
        noisinh: svnoisinh,
        nganh: svnganh,
        hedt: svhedt,
        khoahoc: svkhoahoc,
        sdt: svsdt,
        email: svemail,
        vaodoan: svvaodoan,
        tinhtrang: tt,
        ngayvd: svngayvaodoan,
        chucvu: svchucvu,
        khoa: svkhoa,
        vaoHoi: vaoHoi
      });
      console.log(svvaodoan);
    });
  }
  else {
    res.redirect('/');
  }
}