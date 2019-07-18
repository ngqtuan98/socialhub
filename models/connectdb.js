var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'remotemysql.com',
	user: '5a2hSoXr3m',
	password: 'plguzWSaO2',
	database: '5a2hSoXr3m'
	//host: 'us-cdbr-iron-east-02.cleardb.net',
	//user: 'b959f40338e966',
	//password: '05f8ea2d87b7214',
	//database: 'heroku_c83c1072628dd7c'
	//host     : 'localhost',
	//user     : 'root',
	//password : '123',
	//database : 'socialhub'
});
module.exports = connection;