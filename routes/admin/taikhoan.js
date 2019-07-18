var express = require('express');
var router = express.Router();
var connection = require('../../models/connectdb');

router.get('/', function (req, res) {
  if (req.session.Loggedin = true) {
    var sql = "select * from logins ";
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      res.render('admin/taikhoan', {
        results
      });
    });
  }
  else {
    res.redirect('/admin')
  }
});
router.post('/timkiem', function (req, res) {
  var findmaSV = req.body.findmaSV;
  var sql = "select * from logins Where id_maSV= ? ";
  connection.query(sql, [findmaSV], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.render('admin/taikhoan', {
      results
    });
  });
})
module.exports = router;