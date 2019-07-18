var express = require('express');
var router = express.Router();
var connection = require('../../models/connectdb');
/* GET home page. */

router.get('/', function (req, res) {
  var sql = "select  DATE_FORMAT(ngayChuyen,'%d/%m/%Y') AS ngayChuyen, tinhTrang, chucVu, flag_noti, ghiChu, id_maSV, noiVaoDoan from chuyendoans as c INNER JOIN doans as d ON c.id_doan = d.Id ORDER BY ngayChuyen ASC ";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.render('admin/chuyendoan', {
      results
    });
  });
});

router.get('/duyethoso/:Id', function (req, res) {
  var Id = req.params.Id;
  res.render('admin/chuyendoan/duyet', {
    Id: Id,
  });
});
router.post('/duyethoso/:Id', function (req, res) {
  var Id = req.params.Id;
  var select = req.body.selectpicker;
  if (select == 0) {
    var sqlUD = "Update chuyendoans set tinhTrang = ?, chucVu = ?, flag_noti = ? where id_maSV= ? ";
    var query = connection.query(sqlUD, ['Đã tiếp nhận hồ sơ', 'Đang trong quá trình xữ lý', select, Id], function (err, result) {
      console.log("Record Updated!!");
      console.log(result);
      res.redirect('/admin/chuyendoan');
    });
  }
  else {
    var sqlUD = "Update chuyendoans set tinhTrang = ?, chucVu = ?, flag_noti = ? where id_maSV= ? ";
    var query = connection.query(sqlUD, ['Đang chờ xữ lý', 'Đang chờ xữ lý', select, Id], function (err, result) {
      console.log("Record Updated!!");
      console.log(result);
      res.redirect('/admin/chuyendoan');
    });
  }
})
module.exports = router;