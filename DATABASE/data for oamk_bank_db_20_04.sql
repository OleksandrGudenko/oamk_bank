-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 20, 2018 at 12:16 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oamk_bank`
--

--
-- Dumping data for table `accounts_table`
--

INSERT INTO `accounts_table` (`user_id`, `account_id`, `Balance`, `credit`) VALUES
(11, 'TEST1111111111111111', '2000.00', '100.00'),
(12, 'TEST1212121212121212', '3000.00', '100.00'),
(10, 'TEST1234566891011123', '1000.00', '100.00'),
(1, 'TEST1234567891011123', '3700.00', '100.00'),
(13, 'TEST1313131313131313', '4000.00', '100.00'),
(14, 'TEST1414141414141414', '5000.00', '100.00'),
(15, 'TEST1515151515151515', '6000.00', '100.00'),
(16, 'TEST1616161616161616', '7000.00', '100.00'),
(1, 'TEST1717171717171717', '7836.00', '100.00'),
(2, 'TEST1818181818181818', '9000.00', '100.00'),
(3, 'TEST1919191919191919', '1000.00', '100.00'),
(4, 'TEST2020202020202020', '2000.00', '100.00'),
(2, 'TEST2222222222222222', '2000.00', '100.00'),
(3, 'TEST3333333333333333', '3000.00', '100.00'),
(4, 'TEST4444444444444444', '4000.00', '100.00'),
(5, 'TEST5555555555555555', '5000.00', '100.00'),
(6, 'TEST6666666666666666', '6000.00', '100.00'),
(7, 'TEST7777777777777777', '7000.00', '100.00'),
(8, 'TEST8888888888888888', '8000.00', '100.00'),
(9, 'TEST9999999999999999', '9000.00', '100.00');

--
-- Dumping data for table `loans`
--

INSERT INTO `loans` (`loan_id`, `user_id`, `amount`, `timestamp`, `account_id`) VALUES
(7, 1, '1111.00', '2018-04-17 10:05:26', 'TEST1717171717171717'),
(8, 1, '11111.00', '2018-04-17 10:10:24', 'TEST1717171717171717'),
(9, 1, '1111.00', '2018-04-18 11:02:31', 'TEST1234567891011123'),
(10, 1, '1111.00', '2018-04-18 11:02:58', 'TEST1717171717171717'),
(11, 1, '1111.00', '2018-04-18 11:03:02', 'TEST1717171717171717'),
(12, 1, '1111.00', '2018-04-18 11:03:02', 'TEST1717171717171717'),
(13, 1, '1060.00', '2018-04-18 11:03:02', 'TEST1717171717171717'),
(15, 1, '1.00', '2018-04-18 11:22:36', 'TEST1234567891011123'),
(18, 1, '0.10', '2018-04-18 17:01:18', 'TEST1717171717171717'),
(19, 1, '1.00', '2018-04-18 17:08:13', 'TEST1717171717171717'),
(22, 1, '10.00', '2018-04-18 17:17:12', 'TEST1717171717171717'),
(23, 1, '9.99', '2018-04-18 17:24:28', 'TEST1717171717171717'),
(24, 1, '0.76', '2018-04-18 17:25:13', 'TEST1717171717171717'),
(25, 1, '0.76', '2018-04-18 17:25:47', 'TEST1717171717171717'),
(26, 1, '0.01', '2018-04-18 17:26:49', 'TEST1717171717171717'),
(27, 1, '0.41', '2018-04-18 17:28:35', 'TEST1717171717171717'),
(28, 1, '0.01', '2018-04-18 17:33:26', 'TEST1717171717171717');

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `city`, `address`, `postalcode`, `email`, `phone`, `occupation`, `username`, `password`, `register_date`) VALUES
(1, 'Test', 'One', 'Oulu', 'Kajaanintie 7', '90114', 'test1@test.com', '046-123-6698', 'Teacher', 'test1', '$2y$10$qL4WJLxZsOlciTMfp.QvYupP5V7sbM9vEfyXU4ZfkCzhGdgKBAtna', '2018-03-28 21:00:00'),
(2, 'Ma', 'Man', '', 'Bro Streen 22', '12345', 'boydogman96@broland.bro', '', '', 'test2', '0', '2018-03-20 09:10:59'),
(3, 'Test', 'Three', 'Oulu', 'Kirkko tie 1', '90113', 'test2@test.com', '046-123-5432', 'Nurse', 'test3', '0', '2018-03-28 21:00:00'),
(4, 'Test', 'Four', 'Oulu', 'Test avenue 2', '90112', 'test3@test.com', '046-123-6543', 'Production Manager', 'test4', '0', '2018-03-28 21:00:00'),
(5, 'Test', 'Five', 'Imatra', 'Test avenue 3', '90111', 'test4@test.com', '046-123-4651', 'Singer', 'test5', '0', '2018-03-28 21:00:00'),
(6, 'Test', 'Six', 'Utsjoki', 'Test avenue 4', '90110', 'test5@test.com', '046-123-7654', 'Accoundant', 'test6', '0', '2018-03-28 21:00:00'),
(7, 'Test', 'Seven', 'Kemi', 'Test avenue 14', '90129', 'test6@test.com', '046-123-8745', 'Student', 'test7', '0', '2018-03-28 21:00:00'),
(8, 'Test', 'Eight', 'Nivala', 'Test avenue 12', '90128', 'test7@test.com', '046-123-987', 'House wife', 'test8', '0', '2018-03-28 21:00:00'),
(9, 'Test', 'Nine', 'Haapavesi', 'Test avenue 6', '90127', 'test8@test.com', '046-789-4567', 'Unemployed', 'test9', '0', '2018-03-28 21:00:00'),
(10, 'Test', 'Ten', 'Oulainen', 'Test avenue 62', '90126', 'test9@test.com', '046-456-4567', 'Cleaner', 'test10', '0', '2018-03-28 21:00:00'),
(11, 'Test', 'Eleve', 'Turku', 'Test street 2', '90125', 'test11@test.com', '046-123-7894', 'Store Casher', 'test11', '0', '2018-03-28 21:00:00'),
(12, 'Test', 'Tweleve', 'Tampere', 'Test street 32', '90124', 'test12@test.com', '046-234-4567', 'Fund manager', 'test12', '0', '2018-03-28 21:00:00'),
(13, 'Test', 'Thirteen', 'Vaasa', 'Test street 1', '90119', 'test13@test.com', '044-123-4567', 'Police', 'test13', '0', '2018-03-28 21:00:00'),
(14, 'Test', 'Fourteen', 'Rovaniemi', 'Test street 13', '90120', 'test14@test.com', '040-123-4567', 'Engineer', 'test14', '0', '2018-03-28 21:00:00'),
(15, 'Test', 'Fifteen', 'Helsinki', 'Test street 55', '90121', 'test15@test.com', '046-321-4567', 'Car mechanics', 'test15', '0', '2018-03-28 21:00:00'),
(16, 'Test', 'Sixteen', 'Kajaani', 'Test street 870', '90122', 'test16@test.com', '046-123-1234', 'Fireman', 'test16', '0', '2018-03-28 21:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
