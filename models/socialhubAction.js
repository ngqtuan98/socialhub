const connection = require('./connectdb');
class SocialhubAction  {
    getSinhVien(sinhvien) {
        var sql = "SELECT tenSV, maSV, lop, tenKhoa FROM  sinhviens as s  INNER JOIN khoas as k ON s.id_khoa = k.id WHERE maSV = ? "
        connection.query(sql, [sinhvien.maSV], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            for (var i = 0; i < results.length; ++i) {
                sinhvien.tenSV = results[i].tenSV;
                sinhvien.maLop = results[i].lop;
                sinhvien.tenKhoa = results[i].tenKhoa;
            }
            console.log(sinhvien);     
        });
        
    }
    getDoan(doan) {
        var sqlDoan = "select * from doans";
        connection.query(sqlDoan, (error, results, fieldds) => {
            if (error) {
                return console.error(error.message);
            }
            for (var i = 0; i < results.length; ++i) {
                doan.Id = results[i].Id;
                doan.noiVaoDoan = results[i].noiVaoDoan;
            }
            return doan;
        });    
    }
}
module.exports = SocialhubAction;