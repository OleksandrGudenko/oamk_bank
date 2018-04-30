-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 30, 2018 at 12:36 PM
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
-- Table structure for table `accounts_table`
--

CREATE TABLE `accounts_table` (
  `user_id` int(11) NOT NULL,
  `account_id` varchar(255) NOT NULL,
  `Balance` decimal(20,2) NOT NULL,
  `credit` decimal(20,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Responsible for Displaying accounts info.';

-- --------------------------------------------------------

--
-- Table structure for table `customer_requests`
--

CREATE TABLE `customer_requests` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `body` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `loans`
--

CREATE TABLE `loans` (
  `loan_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` decimal(20,2) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `account_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Shows users loans.';

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `transaction_id` int(11) NOT NULL,
  `sender` varchar(255) NOT NULL,
  `receiver` varchar(255) NOT NULL,
  `amount` decimal(20,2) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `password` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `register_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id_fk_idx` (`user_id`);

--
-- Indexes for table `loans`
--
ALTER TABLE `loans`
  ADD PRIMARY KEY (`loan_id`),
  ADD KEY `loans_ibfk_1` (`user_id`),
  ADD KEY `account_id_fk` (`account_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `loans`
--
ALTER TABLE `loans`
  MODIFY `loan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
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
  ADD CONSTRAINT `user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `loans`
--
ALTER TABLE `loans`
  ADD CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `loans_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `accounts_table` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
