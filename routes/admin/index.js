var express = require('express');
var router = express.Router();
var connection = require('../../models/connectdb');
/* GET home page. */

router.get('/', function (req, res) {
    var sql = "select * from sinhviens";
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      res.render('admin/index', { results
      });
    });
  });
module.exports = router;