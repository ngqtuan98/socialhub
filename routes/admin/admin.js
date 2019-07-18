var express = require('express');
var router = express.Router();
var connection = require('../../models/connectdb');
router.get('/', function (req, res, next) {
	var messages = '';
	res.render('admin/login',{ messages: messages});
});
router.post('/login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
		connection.query('SELECT * FROM admin WHERE maAdmin = ? AND password = ?', [username, password], function (error, results, fields) {
			if (results.length > 0) {
				req.session.Loggedin = true;
				for (var i = 0; i < results.length; i++) {
					req.session.maAdmin = results[i].maAdmin;				
						res.redirect('/admin/sinhvien');
				}	
			} else {
				var messages = 'Incorrect Mssv and/or Password!';
				res.render('admin/login',{ messages: messages});
			}
		});
	} else {
		var messages = 'Incorrect Mssv and/or Password!';
		res.render('admin/login',{ messages: messages});
	}
});
module.exports = router;