-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 20, 2018 at 11:45 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(45) COLLATE utf8_unicode_520_ci NOT NULL,
  `lastname` varchar(45) COLLATE utf8_unicode_520_ci NOT NULL,
  `city` varchar(45) COLLATE utf8_unicode_520_ci NOT NULL,
  `address` varchar(70) COLLATE utf8_unicode_520_ci NOT NULL,
  `postalcode` char(5) COLLATE utf8_unicode_520_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_520_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_520_ci NOT NULL,
  `occupation` varchar(50) COLLATE utf8_unicode_520_ci NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_520_ci NOT NULL,
  `password` int(11) NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `city`, `address`, `postalcode`, `email`, `phone`, `occupation`, `username`, `password`, `register_date`) VALUES
(1, 'Test', 'One', 'Oulu', 'Kajaanintie 7', '90114', 'test1@test.com', '046-123-6698', 'Teacher', 'test1', 0, '2018-03-28 21:00:00'),
(2, 'Ma', 'Man', '', 'Bro Streen 22', '12345', 'boydogman96@broland.bro', '', '', 'test2', 0, '2018-03-20 09:10:59'),
(3, 'Test', 'Three', 'Oulu', 'Kirkko tie 1', '90113', 'test2@test.com', '046-123-5432', 'Nurse', 'test3', 0, '2018-03-28 21:00:00'),
(4, 'Test', 'Four', 'Oulu', 'Test avenue 2', '90112', 'test3@test.com', '046-123-6543', 'Production Manager', 'test4', 0, '2018-03-28 21:00:00'),
(5, 'Test', 'Five', 'Imatra', 'Test avenue 3', '90111', 'test4@test.com', '046-123-4651', 'Singer', 'test5', 0, '2018-03-28 21:00:00'),
(6, 'Test', 'Six', 'Utsjoki', 'Test avenue 4', '90110', 'test5@test.com', '046-123-7654', 'Accoundant', 'test6', 0, '2018-03-28 21:00:00'),
(7, 'Test', 'Seven', 'Kemi', 'Test avenue 14', '90129', 'test6@test.com', '046-123-8745', 'Student', 'test7', 0, '2018-03-28 21:00:00'),
(8, 'Test', 'Eight', 'Nivala', 'Test avenue 12', '90128', 'test7@test.com', '046-123-987', 'House wife', 'test8', 0, '2018-03-28 21:00:00'),
(9, 'Test', 'Nine', 'Haapavesi', 'Test avenue 6', '90127', 'test8@test.com', '046-789-4567', 'Unemployed', 'test9', 0, '2018-03-28 21:00:00'),
(10, 'Test', 'Ten', 'Oulainen', 'Test avenue 62', '90126', 'test9@test.com', '046-456-4567', 'Cleaner', 'test10', 0, '2018-03-28 21:00:00'),
(11, 'Test', 'Eleve', 'Turku', 'Test street 2', '90125', 'test11@test.com', '046-123-7894', 'Store Casher', 'test11', 0, '2018-03-28 21:00:00'),
(12, 'Test', 'Tweleve', 'Tampere', 'Test street 32', '90124', 'test12@test.com', '046-234-4567', 'Fund manager', 'test12', 0, '2018-03-28 21:00:00'),
(13, 'Test', 'Thirteen', 'Vaasa', 'Test street 1', '90119', 'test13@test.com', '044-123-4567', 'Police', 'test13', 0, '2018-03-28 21:00:00'),
(14, 'Test', 'Fourteen', 'Rovaniemi', 'Test street 13', '90120', 'test14@test.com', '040-123-4567', 'Engineer', 'test14', 0, '2018-03-28 21:00:00'),
(15, 'Test', 'Fifteen', 'Helsinki', 'Test street 55', '90121', 'test15@test.com', '046-321-4567', 'Car mechanics', 'test15', 0, '2018-03-28 21:00:00'),
(16, 'Test', 'Sixteen', 'Kajaani', 'Test street 870', '90122', 'test16@test.com', '046-123-1234', 'Fireman', 'test16', 0, '2018-03-28 21:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
