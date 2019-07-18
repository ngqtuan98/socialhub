var mysql = require('mysql');
 
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'SocialHub',
   
});
connection.connect();
 
console.log("Connected to Mysql");
 
var sql = "UPDATE sinhviens set sdt =? , email =?  WHERE maSV = ?";
 
var query = connection.query(sql, ["0123456789", "Patil@gmail.com", '16DH100000'], function(err, result) {
    console.log("Record Updated!!");
    console.log(result);
});
 
connection.end();