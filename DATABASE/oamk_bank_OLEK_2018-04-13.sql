-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 13, 2018 at 06:17 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oamk_bank_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts_table`
--

CREATE TABLE `accounts_table` (
  `user_id` int(11) NOT NULL,
  `account_id` varchar(255) NOT NULL,
  `Balance` int(11) NOT NULL,
  `credit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Responsible for Displaying accounts info.';

--
-- Dumping data for table `accounts_table`
--

INSERT INTO `accounts_table` (`user_id`, `account_id`, `Balance`, `credit`) VALUES
(11, 'TEST1111111111111111', 2000, 100),
(12, 'TEST1212121212121212', 3000, 100),
(10, 'TEST1234566891011123', 1000, 100),
(1, 'TEST1234567891011123', 1000, 100),
(13, 'TEST1313131313131313', 4000, 100),
(14, 'TEST1414141414141414', 5000, 100),
(15, 'TEST1515151515151515', 6000, 100),
(16, 'TEST1616161616161616', 7000, 100),
(1, 'TEST1717171717171717', 123, 100),
(2, 'TEST1818181818181818', 9000, 100),
(3, 'TEST1919191919191919', 1000, 100),
(4, 'TEST2020202020202020', 2000, 100),
(2, 'TEST2222222222222222', 2000, 100),
(3, 'TEST3333333333333333', 3000, 100),
(4, 'TEST4444444444444444', 4000, 100),
(5, 'TEST5555555555555555', 5000, 100),
(6, 'TEST6666666666666666', 6000, 100),
(7, 'TEST7777777777777777', 7000, 100),
(8, 'TEST8888888888888888', 8000, 100),
(9, 'TEST9999999999999999', 9000, 100);

-- --------------------------------------------------------

--
-- Table structure for table `customer_requests`
--

CREATE TABLE `customer_requests` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table responsible for receiving customers mails.';

-- --------------------------------------------------------

--
-- Table structure for table `loans`
--

CREATE TABLE `loans` (
  `account_id` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Shows users loans.';

--
-- Dumping data for table `loans`
--

INSERT INTO `loans` (`account_id`, `user_id`, `amount`, `timestamp`) VALUES
('TEST1234567891011123', 1, '123', '2018-04-13 13:35:51');

-- --------------------------------------------------------

--
-- Table structure for table `login_credentials`
--

CREATE TABLE `login_credentials` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This is login table, where username and password is stored';

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `postalcode` char(5) COLLATE utf8_unicode_520_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `ocupation` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `city`, `address`, `postalcode`, `email`, `phone`, `ocupation`, `register_date`) VALUES
(1, 'Test', 'One', 'Oulu', 'Kajaanintie 7', '90114', 'test1@test.com', '046-123-6698', 'Teacher', '2018-03-28 21:00:00'),
(2, 'Ma', 'Man', '', 'Bro Streen 22', '12345', 'boydogman96@broland.bro', '', '', '2018-03-20 09:10:59'),
(3, 'Test', 'Three', 'Oulu', 'Kirkko tie 1', '90113', 'test2@test.com', '046-123-5432', 'Nurse', '2018-03-28 21:00:00'),
(4, 'Test', 'Four', 'Oulu', 'Test avenue 2', '90112', 'test3@test.com', '046-123-6543', 'Production Manager', '2018-03-28 21:00:00'),
(5, 'Test', 'Five', 'Imatra', 'Test avenue 3', '90111', 'test4@test.com', '046-123-4651', 'Singer', '2018-03-28 21:00:00'),
(6, 'Test', 'Six', 'Utsjoki', 'Test avenue 4', '90110', 'test5@test.com', '046-123-7654', 'Accoundant', '2018-03-28 21:00:00'),
(7, 'Test', 'Seven', 'Kemi', 'Test avenue 14', '90129', 'test6@test.com', '046-123-8745', 'Student', '2018-03-28 21:00:00'),
(8, 'Test', 'Eight', 'Nivala', 'Test avenue 12', '90128', 'test7@test.com', '046-123-987', 'House wife', '2018-03-28 21:00:00'),
(9, 'Test', 'Nine', 'Haapavesi', 'Test avenue 6', '90127', 'test8@test.com', '046-789-4567', 'Unemployed', '2018-03-28 21:00:00'),
(10, 'Test', 'Ten', 'Oulainen', 'Test avenue 62', '90126', 'test9@test.com', '046-456-4567', 'Cleaner', '2018-03-28 21:00:00'),
(11, 'Test', 'Eleve', 'Turku', 'Test street 2', '90125', 'test11@test.com', '046-123-7894', 'Store Casher', '2018-03-28 21:00:00'),
(12, 'Test', 'Tweleve', 'Tampere', 'Test street 32', '90124', 'test12@test.com', '046-234-4567', 'Fund manager', '2018-03-28 21:00:00'),
(13, 'Test', 'Thirteen', 'Vaasa', 'Test street 1', '90119', 'test13@test.com', '044-123-4567', 'Police', '2018-03-28 21:00:00'),
(14, 'Test', 'Fourteen', 'Rovaniemi', 'Test street 13', '90120', 'test14@test.com', '040-123-4567', 'Engineer', '2018-03-28 21:00:00'),
(15, 'Test', 'Fifteen', 'Helsinki', 'Test street 55', '90121', 'test15@test.com', '046-321-4567', 'Car mechanics', '2018-03-28 21:00:00'),
(16, 'Test', 'Sixteen', 'Kajaani', 'Test street 870', '90122', 'test16@test.com', '046-123-1234', 'Fireman', '2018-03-28 21:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts_table`
--
ALTER TABLE `accounts_table`
  ADD PRIMARY KEY (`account_id`),
  ADD UNIQUE KEY `account_id_UNIQUE` (`account_id`),
  ADD KEY `accounts_table_ibfk_1` (`user_id`);

--
-- Indexes for table `customer_requests`
--
ALTER TABLE `customer_requests`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `User ID` (`id`);

--
-- Indexes for table `loans`
--
ALTER TABLE `loans`
  ADD KEY `account_id` (`account_id`),
  ADD KEY `loans_ibfk_1` (`user_id`);

--
-- Indexes for table `login_credentials`
--
ALTER TABLE `login_credentials`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

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
-- AUTO_INCREMENT for table `customer_requests`
--
ALTER TABLE `customer_requests`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts_table`
--
ALTER TABLE `accounts_table`
  ADD CONSTRAINT `accounts_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `customer_requests`
--
ALTER TABLE `customer_requests`
  ADD CONSTRAINT `customer_requests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `loans`
--
ALTER TABLE `loans`
  ADD CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `loans_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `accounts_table` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `login_credentials`
--
ALTER TABLE `login_credentials`
  ADD CONSTRAINT `login_credentials_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
