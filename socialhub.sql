-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2019 at 01:20 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `socialhub`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `BackupChuyenDoan` ()  BEGIN
DROP TABLE backupchuyendoans;
CREATE TABLE backupchuyendoans LIKE chuyendoans;
INSERT backupchuyendoans SELECT * FROM chuyendoans;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `BackupSinhvien` ()  BEGIN
DROP TABLE backupsinhvien;
CREATE TABLE backupsinhvien LIKE sinhviens;
INSERT backupsinhvien SELECT * FROM sinhviens;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllChuyenDoans` ()  BEGIN
select * from chuyendoans;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllHoatdongs` ()  BEGIN
SELECT * FROM hoatdongs;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllLogin` ()  BEGIN
select * from logins;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllSinhvien` ()  BEGIN
SELECT *  FROM sinhviens;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `maAdmin` int(11) NOT NULL,
  `password` varchar(10) NOT NULL,
  `tenAdmin` varchar(50) DEFAULT NULL,
  `chucVu` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`maAdmin`, `password`, `tenAdmin`, `chucVu`) VALUES
(123, '123       ', 'Nguyen Quoc Tuan', 'Sinh vien');

-- --------------------------------------------------------

--
-- Table structure for table `backupchuyendoans`
--

CREATE TABLE `backupchuyendoans` (
  `Id` varchar(20) NOT NULL,
  `ngayChuyen` date DEFAULT NULL,
  `tinhTrang` varchar(50) DEFAULT NULL,
  `chucVu` varchar(50) DEFAULT NULL,
  `flag_noti` int(11) DEFAULT NULL,
  `ghiChu` longtext,
  `id_maSV` varchar(10) DEFAULT NULL,
  `id_doan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `backupsinhvien`
--

CREATE TABLE `backupsinhvien` (
  `maSV` varchar(10) NOT NULL,
  `tenSV` varchar(50) DEFAULT NULL,
  `phai` varchar(2) DEFAULT NULL,
  `ngaySinh` date DEFAULT NULL,
  `noiSinh` varchar(50) DEFAULT NULL,
  `lop` varchar(9) DEFAULT NULL,
  `nganh` varchar(50) DEFAULT NULL,
  `heDT` varchar(50) DEFAULT NULL,
  `khoaHoc` varchar(9) DEFAULT NULL,
  `sdt` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `vaoDoan` varchar(50) DEFAULT NULL,
  `ngayVaoDoan` date DEFAULT NULL,
  `chucVu` varchar(50) DEFAULT NULL,
  `id_khoa` int(11) DEFAULT NULL,
  `flag_del` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `backupsinhvien`
--

INSERT INTO `backupsinhvien` (`maSV`, `tenSV`, `phai`, `ngaySinh`, `noiSinh`, `lop`, `nganh`, `heDT`, `khoaHoc`, `sdt`, `email`, `vaoDoan`, `ngayVaoDoan`, `chucVu`, `id_khoa`, `flag_del`) VALUES
('16DH100000', 'Randall Whitmore', 'M', '1998-05-03', 'Huaquillas', 'NB1681', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '0132456', 'tuancbdoan@gmail.com', '0', NULL, '', 5, 0),
('16DH100001', 'Flori Willock', 'F', '1998-02-08', 'Pakemitan', 'NB1681', 'Product Management', 'Đại Học Chính Quy (QC43)', '2016-2020', '0123456789', 'tuancbdoan@gmail.com', '0', NULL, '', 5, 0),
('16DH100002', 'Abbie Creser', 'F', '1998-05-17', 'Kebonagung', 'NB1681', 'Product Management', 'Đại Học Chính Quy (QC43)', '2016-2020', '(158) 7039034', 'acreser2@boston.com', '0', NULL, '', 5, 0),
('16DH100003', 'Otho Tackle', 'M', '1998-10-08', 'Wadi', 'NB1681', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(336) 9741383', 'otackle3@smh.com.au', '0', NULL, '', 5, 0),
('16DH100004', 'Barbaraanne Moland', 'F', '1998-03-19', 'Banjar Asahduren', 'NB1681', 'Training', 'Đại Học Chính Quy (QC43)', '2016-2020', '(319) 4333425', 'bmoland4@flavors.me', '0', NULL, '', 5, 0),
('16DH100005', 'Jocelyn Learned', 'F', '1998-08-13', 'Ögöömör', 'NB1681', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(945) 8165215', 'jlearned5@google.pl', '0', NULL, '', 5, 0),
('16DH100006', 'Dane Bartkowiak', 'M', '1998-11-24', 'Kunwi', 'NB1681', 'Training', 'Đại Học Chính Quy (QC43)', '2016-2020', '(955) 1259057', 'dbartkowiak6@theatlantic.com', '0', NULL, '', 5, 0),
('16DH100007', 'Devin Mundall', 'F', '1998-01-27', 'Ampatuan', 'TH1376', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(694) 1642761', 'dmundall7@umich.edu', '0', NULL, '', 1, 0),
('16DH100008', 'Ezmeralda Reignolds', 'F', '1998-08-03', 'Lintan Chengguanzhen', 'TH1376', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(316) 2263392', 'ereignolds8@home.pl', '0', NULL, '', 1, 0),
('16DH100009', 'Grata Brodley', 'F', '1998-03-14', 'Timiryazevskoye', 'TH1376', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(809) 3686947', 'gbrodley9@bigcartel.com', '0', NULL, '', 1, 0),
('16DH100010', 'Maryann Bilbrooke', 'F', '1998-10-28', 'Saratamata', 'TH1376', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(714) 2252553', 'mbilbrookea@eventbrite.com', '0', NULL, '', 1, 0),
('16DH100011', 'Bearnard Iacovone', 'M', '1998-07-04', 'Jiamiao', 'TH1376', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(805) 1420571', 'biacovoneb@fc2.com', '0', NULL, '', 1, 0),
('16DH100012', 'Maegan Bizley', 'F', '1998-12-21', 'Qiandeng', 'TH1376', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(991) 5554473', 'mbizleyc@people.com.cn', '0', NULL, '', 1, 0),
('16DH100013', 'Jean Gillebride', 'F', '1998-09-13', 'Radzanów', 'TH1376', 'Human Resources', 'Đại Học Chính Quy (QC43)', '2016-2020', '(578) 3861719', 'jgillebrided@washington.edu', '0', NULL, '', 1, 0),
('16DH100014', 'Sanderson Hansel', 'M', '1998-09-26', 'Itaporanga', 'TH1376', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(386) 7618048', 'shansele@cpanel.net', '0', NULL, '', 1, 0),
('16DH100015', 'Matelda Dinis', 'F', '1998-01-13', 'Nakamura', 'TH1376', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(454) 6043337', 'mdinisf@hud.gov', '0', NULL, '', 1, 0),
('16DH100016', 'Stanley Solman', 'M', '1998-09-02', 'North Bay', 'TH1376', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(937) 2228018', 'ssolmang@foxnews.com', '0', NULL, '', 1, 0),
('16DH100017', 'Kean Iacopini', 'M', '1998-06-07', 'Itaquaquecetuba', 'TH1376', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(520) 7332939', 'kiacopinih@apple.com', '0', NULL, '', 1, 0),
('16DH100018', 'Ferne Plitz', 'F', '1998-08-21', 'El Paso', 'TH1376', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(535) 2989616', 'fplitzi@google.cn', '0', NULL, '', 1, 0),
('16DH100019', 'Evie Elbourn', 'F', '1998-10-16', 'Morelos', 'TH1376', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(789) 8511917', 'eelbournj@reverbnation.com', '0', NULL, '', 1, 0),
('16DH100020', 'Rodge Asals', 'M', '1998-02-05', 'Kuala Terengganu', 'TH1376', 'Services', 'Đại Học Chính Quy (QC43)', '2016-2020', '(458) 9103204', 'rasalsk@amazon.com', '0', NULL, '', 1, 0),
('16DH100021', 'Hatti McMillan', 'F', '1998-10-24', 'Zaokskiy', 'TH1376', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(168) 8554487', 'hmcmillanl@dagondesign.com', '0', NULL, '', 1, 0),
('16DH100022', 'Gearalt Ruusa', 'M', '1998-08-26', 'Dadiharja', 'TH1376', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(206) 4214587', 'gruusam@ameblo.jp', '0', NULL, '', 1, 0),
('16DH100023', 'Tammi Weippert', 'F', '1998-01-27', 'Choropampa', 'TH1376', 'Marketing', 'Đại Học Chính Quy (QC43)', '2016-2020', '(941) 7838198', 'tweippertn@admin.ch', '0', NULL, '', 1, 0),
('16DH100024', 'Chalmers Pirson', 'M', '1998-12-24', 'Camajuaní', 'TH1376', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(817) 1857603', 'cpirsono@netvibes.com', '0', NULL, '', 1, 0),
('16DH100025', 'Jozef Mechi', 'M', '1998-04-23', 'Long Loreh', 'TH1376', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(316) 3192393', 'jmechip@marriott.com', '0', NULL, '', 1, 0),
('16DH100026', 'Fredrick Dincke', 'M', '1998-08-02', 'Santa Cruz de Barahona', 'TH1376', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(272) 2217117', 'fdinckeq@cloudflare.com', '0', NULL, '', 1, 0),
('16DH100027', 'Flss Nathan', 'F', '1998-12-01', 'Chonchi', 'TH1376', 'Support', 'Đại Học Chính Quy (QC43)', '2016-2020', '(508) 5488314', 'fnathanr@arstechnica.com', '0', NULL, '', 1, 0),
('16DH100028', 'Ursulina Bremeyer', 'F', '1998-02-06', 'Capelinha', 'TH1376', 'Business Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(598) 4526146', 'ubremeyers@uiuc.edu', '0', NULL, '', 1, 0),
('16DH100029', 'Maxine Stoner', 'F', '1998-12-27', 'Mato Cheirinhos', 'TH1376', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(137) 7056696', 'mstonert@instagram.com', '0', NULL, '', 1, 0),
('16DH100030', 'Angel Bazelle', 'M', '1998-07-01', 'Guli', 'TH1376', 'Business Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(600) 7192162', 'abazelleu@a8.net', '0', NULL, '', 1, 0),
('16DH100031', 'Carlyle Vivians', 'M', '1998-05-08', 'Ḩātim', 'DL1070', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(352) 3303846', 'cviviansv@vkontakte.ru', '0', NULL, '', 3, 0),
('16DH100032', 'Emogene Bonick', 'F', '1998-09-22', 'Caikouji', 'DL1070', 'Training', 'Đại Học Chính Quy (QC43)', '2016-2020', '(821) 5435267', 'ebonickw@taobao.com', '0', NULL, '', 3, 0),
('16DH100033', 'Ranice Patman', 'F', '1998-11-06', 'Kajar', 'DL1070', 'Marketing', 'Đại Học Chính Quy (QC43)', '2016-2020', '(938) 4911385', 'rpatmanx@reference.com', '0', NULL, '', 3, 0),
('16DH100034', 'Grantham Shemmans', 'M', '1998-01-28', 'Rembes', 'DL1070', 'Training', 'Đại Học Chính Quy (QC43)', '2016-2020', '(412) 9083092', 'gshemmansy@free.fr', '0', NULL, '', 3, 0),
('16DH100035', 'Frederic Laverick', 'M', '1998-12-16', 'Guanghai', 'DL1070', 'Product Management', 'Đại Học Chính Quy (QC43)', '2016-2020', '(584) 1890509', 'flaverickz@google.cn', '0', NULL, '', 3, 0),
('16DH100036', 'Sandy Trathan', 'F', '1998-04-27', 'Kramfors', 'DL1070', 'Business Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(304) 5731726', 'strathan10@163.com', '0', NULL, '', 3, 0),
('16DH100037', 'Cinderella Garratt', 'F', '1998-02-23', 'Seulimeum', 'DL1070', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(269) 6559875', 'cgarratt11@pen.io', '0', NULL, '', 3, 0),
('16DH100038', 'Sophie Zorn', 'F', '1998-08-01', 'Montpellier', 'DL1070', 'Marketing', 'Đại Học Chính Quy (QC43)', '2016-2020', '(997) 4082537', 'szorn12@shop-pro.jp', '0', NULL, '', 3, 0),
('16DH100039', 'Adams Slad', 'M', '1998-06-28', 'Shijiazhuang', 'DL1070', 'Human Resources', 'Đại Học Chính Quy (QC43)', '2016-2020', '(164) 4344538', 'aslad13@diigo.com', '0', NULL, '', 3, 0),
('16DH100040', 'Marijo Setterfield', 'F', '1998-08-17', 'Toledo', 'DL1070', 'Marketing', 'Đại Học Chính Quy (QC43)', '2016-2020', '(526) 8167392', 'msetterfield14@harvard.edu', '0', NULL, '', 3, 0),
('16DH100041', 'Aluin Maisey', 'M', '1998-09-05', 'Jardim da Serra', 'NA1472', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(377) 3361089', 'amaisey15@unc.edu', '0', NULL, '', 2, 0),
('16DH100042', 'Teirtza Conrad', 'F', '1998-10-06', '‘Afula ‘Illit', 'NA1472', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(635) 8463152', 'tconrad16@exblog.jp', '0', NULL, '', 2, 0),
('16DH100043', 'Erminie Brabbs', 'F', '1998-01-20', 'Shengli', 'NA1472', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(831) 9369981', 'ebrabbs17@theglobeandmail.com', '0', NULL, '', 2, 0),
('16DH100044', 'Aggie Rowesby', 'F', '1998-01-26', 'Playas', 'NA1472', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(934) 6759033', 'arowesby18@multiply.com', '1', '2014-10-04', 'Đoàn viên', 2, 0),
('16DH100045', 'Correy Ethridge', 'F', '1998-12-28', 'Banatska Topola', 'NA1472', 'Services', 'Đại Học Chính Quy (QC43)', '2016-2020', '(192) 5123548', 'cethridge19@tinyurl.com', '1', '2014-04-09', 'Đoàn viên', 2, 0),
('16DH100046', 'Amitie Dullingham', 'F', '1998-07-26', 'San Isidro', 'NA1472', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(738) 5191232', 'adullingham1a@scientificamerican.com', '1', '2015-01-11', 'Đoàn viên', 2, 0),
('16DH100047', 'Kirbee Byass', 'F', '1998-03-26', 'Kalí Vrýsi', 'NA1472', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(659) 8344772', 'kbyass1b@tamu.edu', '1', '2014-05-04', 'Đoàn viên', 2, 0),
('16DH100048', 'Judye Sankey', 'F', '1998-11-15', 'Zhukovo', 'NA1472', 'Support', 'Đại Học Chính Quy (QC43)', '2016-2020', '(608) 2469277', 'jsankey1c@amazon.de', '1', '2015-01-12', 'Đoàn viên', 2, 0),
('16DH100049', 'Nobe Cleugher', 'M', '1998-04-21', 'Shimorskoye', 'NA1472', 'Business Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(438) 3136195', 'ncleugher1d@seesaa.net', '1', '2014-06-19', 'Đoàn viên', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `chuyendoans`
--

CREATE TABLE `chuyendoans` (
  `Id` varchar(20) NOT NULL,
  `ngayChuyen` date DEFAULT NULL,
  `tinhTrang` varchar(50) DEFAULT NULL,
  `chucVu` varchar(50) DEFAULT NULL,
  `flag_noti` int(11) DEFAULT NULL,
  `ghiChu` longtext,
  `id_maSV` varchar(10) DEFAULT NULL,
  `id_doan` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dangthongbaos`
--

CREATE TABLE `dangthongbaos` (
  `Id` int(11) NOT NULL,
  `id_thongBao` int(11) DEFAULT NULL,
  `id_maSV` varchar(10) DEFAULT NULL,
  `flag_del` int(11) DEFAULT NULL,
  `flag_tt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dkhoatdongs`
--

CREATE TABLE `dkhoatdongs` (
  `Id` varchar(20) NOT NULL,
  `id_hoatDong` int(11) DEFAULT NULL,
  `id_maSV` varchar(10) DEFAULT NULL,
  `diemdanh` int(11) DEFAULT NULL,
  `danhgia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dkhsvs`
--

CREATE TABLE `dkhsvs` (
  `Id` varchar(20) NOT NULL,
  `ngayVaoHoi` date DEFAULT NULL,
  `tinhTrang` varchar(50) DEFAULT NULL,
  `chucVu` varchar(50) DEFAULT NULL,
  `id_maSV` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `doans`
--

CREATE TABLE `doans` (
  `Id` int(11) NOT NULL,
  `noiVaoDoan` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `doans`
--

INSERT INTO `doans` (`Id`, `noiVaoDoan`) VALUES
(0, 'HUFLIT'),
(1, 'KHÁC...');

-- --------------------------------------------------------

--
-- Table structure for table `hoatdongs`
--

CREATE TABLE `hoatdongs` (
  `Id` int(11) NOT NULL,
  `tenHD` varchar(50) DEFAULT NULL,
  `noiDung` longtext,
  `image` longtext,
  `thoiGianDienRa` datetime DEFAULT NULL,
  `thoiGianKetThuc` datetime DEFAULT NULL,
  `soNguoiDK` int(11) DEFAULT NULL,
  `stt` varchar(25) DEFAULT NULL,
  `flag_del` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hoatdongs`
--

INSERT INTO `hoatdongs` (`Id`, `tenHD`, `noiDung`, `image`, `thoiGianDienRa`, `thoiGianKetThuc`, `soNguoiDK`, `stt`, `flag_del`) VALUES
(1, 'Broadbeard Beardtongue', '!@#$%^&*()', 'http://dummyimage.com/236x109.bmp/cc0000/ffffff', '2019-02-23 00:00:00', '2018-05-17 00:00:00', 104, '1', 0),
(2, 'Molokai Jackbean', 'test⁠test‫', 'http://dummyimage.com/216x128.png/5fa2dd/ffffff', '2018-07-23 00:00:00', '2019-01-21 00:00:00', 174, '2', 0),
(3, 'Butterfly Milkweed', '00˙Ɩ$-', 'http://dummyimage.com/229x172.bmp/ff4444/ffffff', '2019-02-26 00:00:00', '2018-09-29 00:00:00', 155, '3', 0),
(4, 'Pepperbush', '() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }', 'http://dummyimage.com/239x106.jpg/cc0000/ffffff', '2018-12-13 00:00:00', '2018-06-11 00:00:00', 108, '4', 0),
(5, 'Copper Zephyrlily', 'הָיְתָהtestالصفحات التّحول', 'http://dummyimage.com/224x250.bmp/dddddd/000000', '2018-08-07 00:00:00', '2019-02-25 00:00:00', 163, '5', 0),
(6, 'Spiny Chloracantha', '() { 0; }; touch /tmp/blns.shellshock1.fail;', 'http://dummyimage.com/159x122.jpg/5fa2dd/ffffff', '2018-06-13 00:00:00', '2019-02-09 00:00:00', 167, '6', 0),
(7, 'Trichostomum Moss', '和製漢語', 'http://dummyimage.com/162x149.jpg/cc0000/ffffff', '2018-04-19 00:00:00', '2018-09-18 00:00:00', 129, '7', 0),
(8, 'Philoxerus', '\"\'\'\'\'\"\'\"', 'http://dummyimage.com/241x135.png/dddddd/000000', '2018-09-24 00:00:00', '2018-04-27 00:00:00', 113, '8', 0),
(9, 'Bright Green Dudleya', '../../../../../../../../../../../etc/passwd%00', 'http://dummyimage.com/212x106.png/cc0000/ffffff', '2019-02-11 00:00:00', '2018-07-30 00:00:00', 173, '9', 0);

-- --------------------------------------------------------

--
-- Table structure for table `khoas`
--

CREATE TABLE `khoas` (
  `Id` int(11) NOT NULL,
  `tenKhoa` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `khoas`
--

INSERT INTO `khoas` (`Id`, `tenKhoa`) VALUES
(1, 'TH'),
(2, 'NA'),
(3, 'DL'),
(4, 'QH'),
(5, 'NB'),
(6, 'HQ'),
(7, 'LA');

-- --------------------------------------------------------

--
-- Table structure for table `logins`
--

CREATE TABLE `logins` (
  `Id` int(11) NOT NULL,
  `id_maSV` varchar(10) NOT NULL,
  `flag_FLogin` int(11) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `logins`
--

INSERT INTO `logins` (`Id`, `id_maSV`, `flag_FLogin`, `password`) VALUES
(1, '16DH100000', 0, '123'),
(2, '16DH100001', 0, '123'),
(3, '16DH100002', 1, 'raaqKvvhC151'),
(4, '16DH100003', 1, '5MiPZ1a'),
(5, '16DH100004', 1, 'jHgXYIj'),
(6, '16DH100005', 1, 'HhkiW8pb'),
(7, '16DH100006', 1, 'EnHXDms'),
(8, '16DH100007', 1, 'XrvaGwAYXK'),
(9, '16DH100008', 1, 'EKcVLlf'),
(10, '16DH100009', 1, '1ZiiRrkK'),
(11, '16DH100010', 1, 'rM8ZFGUXp'),
(12, '16DH100011', 1, 'noCTSRsG4'),
(13, '16DH100012', 1, 'gjj0Ks53qL'),
(14, '16DH100013', 1, 'bRO4vbWG'),
(15, '16DH100014', 1, 'Sex9Eit'),
(16, '16DH100015', 1, '1OPuEBWosVU'),
(17, '16DH100016', 1, 'FZnQn6H78F6'),
(18, '16DH100017', 1, 'bAQbeuSE'),
(19, '16DH100018', 1, 'o0gxGCv9i7'),
(20, '16DH100019', 1, '1NionIv'),
(21, '16DH100020', 1, 'PiAjYhNVd'),
(22, '16DH100021', 1, 'GvPcE3MK8Hg'),
(23, '16DH100022', 1, 'UDm0SL'),
(24, '16DH100023', 1, 'g4wYUh'),
(25, '16DH100024', 1, '6E4s54K2'),
(26, '16DH100025', 1, 'dzMfSF'),
(27, '16DH100026', 1, 'eRMN3kod82'),
(28, '16DH100027', 1, 'NIQrvxddu6'),
(29, '16DH100028', 1, 'M5f8gw65I1'),
(30, '16DH100029', 1, 'oof0BcudFzY'),
(31, '16DH100030', 1, 'cve2ImF'),
(32, '16DH100031', 1, 'FO9Pnvy4m'),
(33, '16DH100032', 1, 'lcL3BPKFlE'),
(34, '16DH100033', 1, 'kD02pvfRX'),
(35, '16DH100034', 1, 'IurApd3MqGs1'),
(36, '16DH100035', 1, 'j62LyVGHc'),
(37, '16DH100036', 1, 'kUUcc2z6ebr'),
(38, '16DH100037', 1, 'Xuj2yLgYi74'),
(39, '16DH100038', 1, 'HQ49p1MVT'),
(40, '16DH100039', 1, '0ksJAC5ye'),
(41, '16DH100040', 1, 'OUubdk'),
(42, '16DH100041', 1, 'Zb7uBq'),
(43, '16DH100042', 1, 'iuNj70QXtPH'),
(44, '16DH100043', 1, 'Tynvxj4'),
(45, '16DH100044', 1, '0tC8jE'),
(46, '16DH100045', 1, 'iLeXBzZw'),
(47, '16DH100046', 1, '0OZlbrtGYn'),
(48, '16DH100047', 1, 'Qt1H5F7H'),
(49, '16DH100048', 1, 'mkdbEQGPQgf9'),
(50, '16DH100049', 1, 'tQ0K2X');

-- --------------------------------------------------------

--
-- Table structure for table `sinhviens`
--

CREATE TABLE `sinhviens` (
  `maSV` varchar(10) NOT NULL,
  `tenSV` varchar(50) DEFAULT NULL,
  `phai` varchar(2) DEFAULT NULL,
  `ngaySinh` date DEFAULT NULL,
  `noiSinh` varchar(50) DEFAULT NULL,
  `lop` varchar(9) DEFAULT NULL,
  `nganh` varchar(50) DEFAULT NULL,
  `heDT` varchar(50) DEFAULT NULL,
  `khoaHoc` varchar(9) DEFAULT NULL,
  `sdt` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `vaoDoan` varchar(50) DEFAULT NULL,
  `ngayVaoDoan` date DEFAULT NULL,
  `chucVu` varchar(50) DEFAULT NULL,
  `id_khoa` int(11) DEFAULT NULL,
  `flag_del` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sinhviens`
--

INSERT INTO `sinhviens` (`maSV`, `tenSV`, `phai`, `ngaySinh`, `noiSinh`, `lop`, `nganh`, `heDT`, `khoaHoc`, `sdt`, `email`, `vaoDoan`, `ngayVaoDoan`, `chucVu`, `id_khoa`, `flag_del`) VALUES
('16DH100000', 'Randall Whitmore', 'M', '1998-05-03', 'Huaquillas', 'NB1681', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '0132456', 'tuancbdoan@gmail.com', '0', NULL, '', 5, 0),
('16DH100001', 'Flori Willock', 'F', '1998-02-08', 'Pakemitan', 'NB1681', 'Product Management', 'Đại Học Chính Quy (QC43)', '2016-2020', '0123456789', 'tuancbdoan@gmail.com', '0', NULL, '', 5, 0),
('16DH100002', 'Abbie Creser', 'F', '1998-05-17', 'Kebonagung', 'NB1681', 'Product Management', 'Đại Học Chính Quy (QC43)', '2016-2020', '(158) 7039034', 'acreser2@boston.com', '0', NULL, '', 5, 0),
('16DH100003', 'Otho Tackle', 'M', '1998-10-08', 'Wadi', 'NB1681', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(336) 9741383', 'otackle3@smh.com.au', '0', NULL, '', 5, 0),
('16DH100004', 'Barbaraanne Moland', 'F', '1998-03-19', 'Banjar Asahduren', 'NB1681', 'Training', 'Đại Học Chính Quy (QC43)', '2016-2020', '(319) 4333425', 'bmoland4@flavors.me', '0', NULL, '', 5, 0),
('16DH100005', 'Jocelyn Learned', 'F', '1998-08-13', 'Ögöömör', 'NB1681', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(945) 8165215', 'jlearned5@google.pl', '0', NULL, '', 5, 0),
('16DH100006', 'Dane Bartkowiak', 'M', '1998-11-24', 'Kunwi', 'NB1681', 'Training', 'Đại Học Chính Quy (QC43)', '2016-2020', '(955) 1259057', 'dbartkowiak6@theatlantic.com', '0', NULL, '', 5, 0),
('16DH100007', 'Devin Mundall', 'F', '1998-01-27', 'Ampatuan', 'TH1376', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(694) 1642761', 'dmundall7@umich.edu', '0', NULL, '', 1, 0),
('16DH100008', 'Ezmeralda Reignolds', 'F', '1998-08-03', 'Lintan Chengguanzhen', 'TH1376', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(316) 2263392', 'ereignolds8@home.pl', '0', NULL, '', 1, 0),
('16DH100009', 'Grata Brodley', 'F', '1998-03-14', 'Timiryazevskoye', 'TH1376', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(809) 3686947', 'gbrodley9@bigcartel.com', '0', NULL, '', 1, 0),
('16DH100010', 'Maryann Bilbrooke', 'F', '1998-10-28', 'Saratamata', 'TH1376', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(714) 2252553', 'mbilbrookea@eventbrite.com', '0', NULL, '', 1, 0),
('16DH100011', 'Bearnard Iacovone', 'M', '1998-07-04', 'Jiamiao', 'TH1376', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(805) 1420571', 'biacovoneb@fc2.com', '0', NULL, '', 1, 0),
('16DH100012', 'Maegan Bizley', 'F', '1998-12-21', 'Qiandeng', 'TH1376', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(991) 5554473', 'mbizleyc@people.com.cn', '0', NULL, '', 1, 0),
('16DH100013', 'Jean Gillebride', 'F', '1998-09-13', 'Radzanów', 'TH1376', 'Human Resources', 'Đại Học Chính Quy (QC43)', '2016-2020', '(578) 3861719', 'jgillebrided@washington.edu', '0', NULL, '', 1, 0),
('16DH100014', 'Sanderson Hansel', 'M', '1998-09-26', 'Itaporanga', 'TH1376', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(386) 7618048', 'shansele@cpanel.net', '0', NULL, '', 1, 0),
('16DH100015', 'Matelda Dinis', 'F', '1998-01-13', 'Nakamura', 'TH1376', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(454) 6043337', 'mdinisf@hud.gov', '0', NULL, '', 1, 0),
('16DH100016', 'Stanley Solman', 'M', '1998-09-02', 'North Bay', 'TH1376', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(937) 2228018', 'ssolmang@foxnews.com', '0', NULL, '', 1, 0),
('16DH100017', 'Kean Iacopini', 'M', '1998-06-07', 'Itaquaquecetuba', 'TH1376', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(520) 7332939', 'kiacopinih@apple.com', '0', NULL, '', 1, 0),
('16DH100018', 'Ferne Plitz', 'F', '1998-08-21', 'El Paso', 'TH1376', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(535) 2989616', 'fplitzi@google.cn', '0', NULL, '', 1, 0),
('16DH100019', 'Evie Elbourn', 'F', '1998-10-16', 'Morelos', 'TH1376', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(789) 8511917', 'eelbournj@reverbnation.com', '0', NULL, '', 1, 0),
('16DH100020', 'Rodge Asals', 'M', '1998-02-05', 'Kuala Terengganu', 'TH1376', 'Services', 'Đại Học Chính Quy (QC43)', '2016-2020', '(458) 9103204', 'rasalsk@amazon.com', '0', NULL, '', 1, 0),
('16DH100021', 'Hatti McMillan', 'F', '1998-10-24', 'Zaokskiy', 'TH1376', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(168) 8554487', 'hmcmillanl@dagondesign.com', '0', NULL, '', 1, 0),
('16DH100022', 'Gearalt Ruusa', 'M', '1998-08-26', 'Dadiharja', 'TH1376', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(206) 4214587', 'gruusam@ameblo.jp', '0', NULL, '', 1, 0),
('16DH100023', 'Tammi Weippert', 'F', '1998-01-27', 'Choropampa', 'TH1376', 'Marketing', 'Đại Học Chính Quy (QC43)', '2016-2020', '(941) 7838198', 'tweippertn@admin.ch', '0', NULL, '', 1, 0),
('16DH100024', 'Chalmers Pirson', 'M', '1998-12-24', 'Camajuaní', 'TH1376', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(817) 1857603', 'cpirsono@netvibes.com', '0', NULL, '', 1, 0),
('16DH100025', 'Jozef Mechi', 'M', '1998-04-23', 'Long Loreh', 'TH1376', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(316) 3192393', 'jmechip@marriott.com', '0', NULL, '', 1, 0),
('16DH100026', 'Fredrick Dincke', 'M', '1998-08-02', 'Santa Cruz de Barahona', 'TH1376', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(272) 2217117', 'fdinckeq@cloudflare.com', '0', NULL, '', 1, 0),
('16DH100027', 'Flss Nathan', 'F', '1998-12-01', 'Chonchi', 'TH1376', 'Support', 'Đại Học Chính Quy (QC43)', '2016-2020', '(508) 5488314', 'fnathanr@arstechnica.com', '0', NULL, '', 1, 0),
('16DH100028', 'Ursulina Bremeyer', 'F', '1998-02-06', 'Capelinha', 'TH1376', 'Business Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(598) 4526146', 'ubremeyers@uiuc.edu', '0', NULL, '', 1, 0),
('16DH100029', 'Maxine Stoner', 'F', '1998-12-27', 'Mato Cheirinhos', 'TH1376', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(137) 7056696', 'mstonert@instagram.com', '0', NULL, '', 1, 0),
('16DH100030', 'Angel Bazelle', 'M', '1998-07-01', 'Guli', 'TH1376', 'Business Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(600) 7192162', 'abazelleu@a8.net', '0', NULL, '', 1, 0),
('16DH100031', 'Carlyle Vivians', 'M', '1998-05-08', 'Ḩātim', 'DL1070', 'Accounting', 'Đại Học Chính Quy (QC43)', '2016-2020', '(352) 3303846', 'cviviansv@vkontakte.ru', '0', NULL, '', 3, 0),
('16DH100032', 'Emogene Bonick', 'F', '1998-09-22', 'Caikouji', 'DL1070', 'Training', 'Đại Học Chính Quy (QC43)', '2016-2020', '(821) 5435267', 'ebonickw@taobao.com', '0', NULL, '', 3, 0),
('16DH100033', 'Ranice Patman', 'F', '1998-11-06', 'Kajar', 'DL1070', 'Marketing', 'Đại Học Chính Quy (QC43)', '2016-2020', '(938) 4911385', 'rpatmanx@reference.com', '0', NULL, '', 3, 0),
('16DH100034', 'Grantham Shemmans', 'M', '1998-01-28', 'Rembes', 'DL1070', 'Training', 'Đại Học Chính Quy (QC43)', '2016-2020', '(412) 9083092', 'gshemmansy@free.fr', '0', NULL, '', 3, 0),
('16DH100035', 'Frederic Laverick', 'M', '1998-12-16', 'Guanghai', 'DL1070', 'Product Management', 'Đại Học Chính Quy (QC43)', '2016-2020', '(584) 1890509', 'flaverickz@google.cn', '0', NULL, '', 3, 0),
('16DH100036', 'Sandy Trathan', 'F', '1998-04-27', 'Kramfors', 'DL1070', 'Business Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(304) 5731726', 'strathan10@163.com', '0', NULL, '', 3, 0),
('16DH100037', 'Cinderella Garratt', 'F', '1998-02-23', 'Seulimeum', 'DL1070', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(269) 6559875', 'cgarratt11@pen.io', '0', NULL, '', 3, 0),
('16DH100038', 'Sophie Zorn', 'F', '1998-08-01', 'Montpellier', 'DL1070', 'Marketing', 'Đại Học Chính Quy (QC43)', '2016-2020', '(997) 4082537', 'szorn12@shop-pro.jp', '0', NULL, '', 3, 0),
('16DH100039', 'Adams Slad', 'M', '1998-06-28', 'Shijiazhuang', 'DL1070', 'Human Resources', 'Đại Học Chính Quy (QC43)', '2016-2020', '(164) 4344538', 'aslad13@diigo.com', '0', NULL, '', 3, 0),
('16DH100040', 'Marijo Setterfield', 'F', '1998-08-17', 'Toledo', 'DL1070', 'Marketing', 'Đại Học Chính Quy (QC43)', '2016-2020', '(526) 8167392', 'msetterfield14@harvard.edu', '0', NULL, '', 3, 0),
('16DH100041', 'Aluin Maisey', 'M', '1998-09-05', 'Jardim da Serra', 'NA1472', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(377) 3361089', 'amaisey15@unc.edu', '0', NULL, '', 2, 0),
('16DH100042', 'Teirtza Conrad', 'F', '1998-10-06', '‘Afula ‘Illit', 'NA1472', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(635) 8463152', 'tconrad16@exblog.jp', '0', NULL, '', 2, 0),
('16DH100043', 'Erminie Brabbs', 'F', '1998-01-20', 'Shengli', 'NA1472', 'Research and Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(831) 9369981', 'ebrabbs17@theglobeandmail.com', '0', NULL, '', 2, 0),
('16DH100044', 'Aggie Rowesby', 'F', '1998-01-26', 'Playas', 'NA1472', 'Sales', 'Đại Học Chính Quy (QC43)', '2016-2020', '(934) 6759033', 'arowesby18@multiply.com', '1', '2014-10-04', 'Đoàn viên', 2, 0),
('16DH100045', 'Correy Ethridge', 'F', '1998-12-28', 'Banatska Topola', 'NA1472', 'Services', 'Đại Học Chính Quy (QC43)', '2016-2020', '(192) 5123548', 'cethridge19@tinyurl.com', '1', '2014-04-09', 'Đoàn viên', 2, 0),
('16DH100046', 'Amitie Dullingham', 'F', '1998-07-26', 'San Isidro', 'NA1472', 'Legal', 'Đại Học Chính Quy (QC43)', '2016-2020', '(738) 5191232', 'adullingham1a@scientificamerican.com', '1', '2015-01-11', 'Đoàn viên', 2, 0),
('16DH100047', 'Kirbee Byass', 'F', '1998-03-26', 'Kalí Vrýsi', 'NA1472', 'Engineering', 'Đại Học Chính Quy (QC43)', '2016-2020', '(659) 8344772', 'kbyass1b@tamu.edu', '1', '2014-05-04', 'Đoàn viên', 2, 0),
('16DH100048', 'Judye Sankey', 'F', '1998-11-15', 'Zhukovo', 'NA1472', 'Support', 'Đại Học Chính Quy (QC43)', '2016-2020', '(608) 2469277', 'jsankey1c@amazon.de', '1', '2015-01-12', 'Đoàn viên', 2, 0),
('16DH100049', 'Nobe Cleugher', 'M', '1998-04-21', 'Shimorskoye', 'NA1472', 'Business Development', 'Đại Học Chính Quy (QC43)', '2016-2020', '(438) 3136195', 'ncleugher1d@seesaa.net', '1', '2014-06-19', 'Đoàn viên', 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `thongbaos`
--

CREATE TABLE `thongbaos` (
  `Id` int(11) NOT NULL,
  `tenTB` varchar(50) DEFAULT NULL,
  `noiDung` longtext,
  `id_maSV` varchar(10) DEFAULT NULL,
  `flag_del` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thongbaos`
--

INSERT INTO `thongbaos` (`Id`, `tenTB`, `noiDung`, `id_maSV`, `flag_del`) VALUES
(2, 'hzzzzz', 'fwfsdfsd', '16DH100000', 1),
(3, 'nộp sổ đoàn ', 'gfdgsd', '16DH100001', 1),
(4, 'nộp sổ đoàn ', 'nộp chưa', '16DH100000', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`maAdmin`);

--
-- Indexes for table `backupchuyendoans`
--
ALTER TABLE `backupchuyendoans`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `backupsinhvien`
--
ALTER TABLE `backupsinhvien`
  ADD PRIMARY KEY (`maSV`);

--
-- Indexes for table `chuyendoans`
--
ALTER TABLE `chuyendoans`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `dangthongbaos`
--
ALTER TABLE `dangthongbaos`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `dkhoatdongs`
--
ALTER TABLE `dkhoatdongs`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `dkhsvs`
--
ALTER TABLE `dkhsvs`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `doans`
--
ALTER TABLE `doans`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `hoatdongs`
--
ALTER TABLE `hoatdongs`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `khoas`
--
ALTER TABLE `khoas`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `sinhviens`
--
ALTER TABLE `sinhviens`
  ADD PRIMARY KEY (`maSV`);

--
-- Indexes for table `thongbaos`
--
ALTER TABLE `thongbaos`
  ADD PRIMARY KEY (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
