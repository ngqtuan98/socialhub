const connection = require('../models/connectdb');
class Sinhvien {
    constructor(maSV) {
        var tenSV;
        var maLop;
        var tenKhoa;
        this.maSV = maSV;
        this.tenSV = tenSV;
        this.maLop = maLop;
        this.tenKhoa = tenKhoa;
    }
}
module.exports = Sinhvien;