-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: oamk_bank
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts_table`
--

DROP TABLE IF EXISTS `accounts_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts_table` (
  `user_id` int(11) NOT NULL,
  `account_id` varchar(255) NOT NULL,
  `Balance` decimal(20,2) NOT NULL,
  `credit` decimal(20,2) NOT NULL,
  PRIMARY KEY (`account_id`),
  UNIQUE KEY `account_id_UNIQUE` (`account_id`),
  KEY `accounts_table_ibfk_1` (`user_id`),
  CONSTRAINT `accounts_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Responsible for Displaying accounts info.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts_table`
--

LOCK TABLES `accounts_table` WRITE;
/*!40000 ALTER TABLE `accounts_table` DISABLE KEYS */;
INSERT INTO `accounts_table` VALUES (11,'TEST1111111111111111',2000.00,100.00),(12,'TEST1212121212121212',3000.00,100.00),(10,'TEST1234566891011123',1000.00,100.00),(1,'TEST1234567891011123',12360.00,100.00),(13,'TEST1313131313131313',4000.00,100.00),(14,'TEST1414141414141414',5000.00,100.00),(15,'TEST1515151515151515',6000.00,100.00),(16,'TEST1616161616161616',7000.00,100.00),(1,'TEST1717171717171717',2794.00,100.00),(2,'TEST1818181818181818',8998.90,100.00),(3,'TEST1919191919191919',1000.00,100.00),(4,'TEST2020202020202020',2000.00,100.00),(2,'TEST2222222222222222',2001.10,100.00),(4,'TEST4444444444444444',4000.00,100.00),(5,'TEST5555555555555555',5000.00,100.00),(6,'TEST6666666666666666',6000.00,100.00),(7,'TEST7777777777777777',7000.00,100.00),(8,'TEST8888888888888888',8000.00,100.00),(9,'TEST9999999999999999',9000.00,100.00);
/*!40000 ALTER TABLE `accounts_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_requests`
--

DROP TABLE IF EXISTS `customer_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `body` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id_fk_idx` (`user_id`),
  CONSTRAINT `user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_requests`
--

LOCK TABLES `customer_requests` WRITE;
/*!40000 ALTER TABLE `customer_requests` DISABLE KEYS */;
INSERT INTO `customer_requests` VALUES (1,1,'asdasd','asdasdasdasdasdasd','2018-04-26 18:41:05'),(2,1,'','asdasdasd','2018-04-26 18:43:43');
/*!40000 ALTER TABLE `customer_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loans`
--

DROP TABLE IF EXISTS `loans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loans` (
  `loan_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `amount` decimal(20,2) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `account_id` varchar(255) NOT NULL,
  PRIMARY KEY (`loan_id`),
  KEY `loans_ibfk_1` (`user_id`),
  KEY `account_id_fk` (`account_id`),
  CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `loans_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `accounts_table` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='Shows users loans.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loans`
--

LOCK TABLES `loans` WRITE;
/*!40000 ALTER TABLE `loans` DISABLE KEYS */;
INSERT INTO `loans` VALUES (7,1,1111.00,'2018-04-17 07:05:26','TEST1717171717171717'),(8,1,11111.00,'2018-04-17 07:10:24','TEST1717171717171717'),(9,1,1111.00,'2018-04-18 08:02:31','TEST1234567891011123'),(10,1,1111.00,'2018-04-18 08:02:58','TEST1717171717171717'),(11,1,1111.00,'2018-04-18 08:03:02','TEST1717171717171717'),(12,1,1111.00,'2018-04-18 08:03:02','TEST1717171717171717'),(13,1,1060.00,'2018-04-18 08:03:02','TEST1717171717171717'),(15,1,1.00,'2018-04-18 08:22:36','TEST1234567891011123'),(18,1,0.10,'2018-04-18 14:01:18','TEST1717171717171717'),(19,1,1.00,'2018-04-18 14:08:13','TEST1717171717171717'),(22,1,10.00,'2018-04-18 14:17:12','TEST1717171717171717'),(23,1,9.99,'2018-04-18 14:24:28','TEST1717171717171717'),(24,1,0.76,'2018-04-18 14:25:13','TEST1717171717171717'),(25,1,0.76,'2018-04-18 14:25:47','TEST1717171717171717'),(26,1,0.01,'2018-04-18 14:26:49','TEST1717171717171717'),(27,1,0.41,'2018-04-18 14:28:35','TEST1717171717171717'),(28,1,0.01,'2018-04-18 14:33:26','TEST1717171717171717'),(29,1,233.00,'2018-04-24 10:34:22','TEST1234567891011123'),(30,1,100.00,'2018-04-26 16:33:19','TEST1717171717171717'),(31,1,200.00,'2018-04-26 16:34:46','TEST1717171717171717'),(32,1,200.00,'2018-04-26 17:50:29','TEST1717171717171717'),(33,1,233.00,'2018-04-26 17:51:10','TEST1717171717171717'),(34,1,21.00,'2018-04-26 18:50:47','TEST1717171717171717'),(35,1,500.00,'2018-04-26 18:51:18','TEST1717171717171717'),(36,1,233.00,'2018-04-26 18:52:01','TEST1717171717171717'),(37,1,500.00,'2018-04-26 18:55:45','TEST1717171717171717');
/*!40000 ALTER TABLE `loans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,
  `sender` varchar(255) NOT NULL,
  `receiver` varchar(255) NOT NULL,
  `amount` decimal(20,2) NOT NULL,
  `reference` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`transaction_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (11,'TEST1234567891011123','TEST1717171717171717',500.00,'Own Sending',1,'2018-04-26 19:44:05');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `register_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Test','One','Oulu','Kajaanintie 7','91234','test1@test.com','046-123-6698','Teacher','test1','$2y$10$12SLt/DUo9nw442BtuCkT.06fB2od4wQYTn9ybPnaQpkUTtQ.6sc.','2018-03-28 18:00:00'),(2,'Ma','Man','test','Bro Streen 22','12345','boydogman96@broland.bro','','','test2','$2y$10$yAx3yXw9L6xL3qPCE3fqXui2DMTbxTNu9BqBhrkejNVuXQiGkxTXy','2018-03-20 07:10:59'),(3,'Test','Three','Oulu','Kirkko tie 1','90113','test2@test.com','046-123-5432','Nurse','test3','$2y$10$NXVek0XcmyNUXwNn66e2yu5ajglhnILFBSnMG9Bdt9hg91XMtyyFC','2018-03-28 18:00:00'),(4,'Test','Four','Oulu','Test avenue 2','90112','test3@test.com','046-123-6543','Production Manager','test4','0','2018-03-28 18:00:00'),(5,'Test','Five','Imatra','Test avenue 3','90111','test4@test.com','046-123-4651','Singer','test5','0','2018-03-28 18:00:00'),(6,'Test','Six','Utsjoki','Test avenue 4','90110','test5@test.com','046-123-7654','Accoundant','test6','0','2018-03-28 18:00:00'),(7,'Test','Seven','Kemi','Test avenue 14','90129','test6@test.com','046-123-8745','Student','test7','0','2018-03-28 18:00:00'),(8,'Test','Eight','Nivala','Test avenue 12','90128','test7@test.com','046-123-987','House wife','test8','0','2018-03-28 18:00:00'),(9,'Test','Nine','Haapavesi','Test avenue 6','90127','test8@test.com','046-789-4567','Unemployed','test9','0','2018-03-28 18:00:00'),(10,'Test','Ten','Oulainen','Test avenue 62','90126','test9@test.com','046-456-4567','Cleaner','test10','0','2018-03-28 18:00:00'),(11,'Test','Eleve','Turku','Test street 2','90125','test11@test.com','046-123-7894','Store Casher','test11','0','2018-03-28 18:00:00'),(12,'Test','Tweleve','Tampere','Test street 32','90124','test12@test.com','046-234-4567','Fund manager','test12','0','2018-03-28 18:00:00'),(13,'Test','Thirteen','Vaasa','Test street 1','90119','test13@test.com','044-123-4567','Police','test13','0','2018-03-28 18:00:00'),(14,'Test','Fourteen','Rovaniemi','Test street 13','90120','test14@test.com','040-123-4567','Engineer','test14','0','2018-03-28 18:00:00'),(15,'Test','Fifteen','Helsinki','Test street 55','90121','test15@test.com','046-321-4567','Car mechanics','test15','0','2018-03-28 18:00:00'),(16,'Test','Sixteen','Kajaani','Test street 870','90122','test16@test.com','046-123-1234','Fireman','test16','0','2018-03-28 18:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-27 12:30:21
