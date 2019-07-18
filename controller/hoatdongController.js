const connection = require('../models/connectdb');
var Login = require('../pattern/login');
var Checklogin = require('../pattern/checklogin');
var thongBaoLogin = require('../pattern/thongbao');

exports.getHoatdong = (req, res, next) => {
  if (req.session.Loggedin == true) {
    var sql = "select Id, tenHD, noiDung, image,  DATE_FORMAT(thoiGianDienRa,'%d/%m/%Y') AS TGDR, DATE_FORMAT(thoiGianKetThuc,'%d/%m/%Y') AS TGKT, soNguoiDK from hoatdongs where flag_del = 0";
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);

      res.render('hoatdong/hoatdong', {
        results
      });
    });
  }
  else {
    res.redirect('/');
  }
}
exports.getHoatdongDangKy = (req, res, next) => {
  if (req.session.Loggedin == true) {
    
    var sql = "select d.Id, diemdanh, danhgia, tenHD, noiDung, image,  DATE_FORMAT(thoiGianDienRa,'%d-%m-%Y') AS TGDR, DATE_FORMAT(thoiGianKetThuc,'%d-%m-%Y') AS TGKT, soNguoiDK from dkhoatdongs d inner join hoatdongs h on d.id_hoatDong = h.Id where id_maSV = ?";
    connection.query(sql, [req.session.mssv], (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
    
        console.log(results);
      res.render('hoatdong/hoatdongdangky', {
        results
      });
    });
  }
  else {
    res.redirect('/');
  }
}
exports.postDanhgia = (req, res, next) => {
  var Id=req.body.Id;
  var select = req.body.selectpicker;
  console.log(select);
  var sqlUD = "UPDATE dkhoatdongs set danhgia = ? WHERE Id = ?";
  var query = connection.query(sqlUD, [select,Id], function (err, result) {
      console.log("Record Updated!!");
      console.log(result);
      res.redirect('/hoatdong/hoatdongdangky')
  });
}