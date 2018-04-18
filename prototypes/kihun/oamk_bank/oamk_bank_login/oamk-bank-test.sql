-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: oamk_bank_2
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
  `Balance` int(11) NOT NULL,
  `credit` int(11) NOT NULL,
  `loan_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`account_id`),
  UNIQUE KEY `account_id_UNIQUE` (`account_id`),
  UNIQUE KEY `loan_id` (`loan_id`),
  KEY `accounts_table_ibfk_1` (`user_id`),
  CONSTRAINT `accounts_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `accounts_table_ibfk_2` FOREIGN KEY (`loan_id`) REFERENCES `loans` (`loan_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Responsible for Displaying accounts info.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts_table`
--

LOCK TABLES `accounts_table` WRITE;
/*!40000 ALTER TABLE `accounts_table` DISABLE KEYS */;
INSERT INTO `accounts_table` VALUES (11,'TEST1111111111111111',2000,100,11),(12,'TEST1212121212121212',3000,100,12),(10,'TEST1234566891011123',1000,100,10),(1,'TEST1234567891011123',1000,100,1),(13,'TEST1313131313131313',4000,100,13),(14,'TEST1414141414141414',5000,100,14),(15,'TEST1515151515151515',6000,100,15),(16,'TEST1616161616161616',7000,100,16),(1,'TEST1717171717171717',8000,100,17),(2,'TEST1818181818181818',9000,100,18),(3,'TEST1919191919191919',1000,100,19),(4,'TEST2020202020202020',2000,100,20),(2,'TEST2222222222222222',2000,100,2),(3,'TEST3333333333333333',3000,100,3),(4,'TEST4444444444444444',4000,100,4),(5,'TEST5555555555555555',5000,100,5),(6,'TEST6666666666666666',6000,100,6),(7,'TEST7777777777777777',7000,100,7),(8,'TEST8888888888888888',8000,100,8),(9,'TEST9999999999999999',9000,100,9);
/*!40000 ALTER TABLE `accounts_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_requests`
--

DROP TABLE IF EXISTS `customer_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_requests` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `User ID` (`id`),
  CONSTRAINT `customer_requests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table responsible for receiving customers mails.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_requests`
--

LOCK TABLES `customer_requests` WRITE;
/*!40000 ALTER TABLE `customer_requests` DISABLE KEYS */;
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
  `amount` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`loan_id`),
  KEY `loans_ibfk_1` (`user_id`),
  CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='Shows users loans.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loans`
--

LOCK TABLES `loans` WRITE;
/*!40000 ALTER TABLE `loans` DISABLE KEYS */;
INSERT INTO `loans` VALUES (1,1,'2000','2018-03-28 21:00:00'),(2,2,'4000','2018-03-28 21:00:00'),(3,3,'2000','2018-03-28 21:00:00'),(4,4,'8000','2018-03-28 21:00:00'),(5,5,'10000','2018-03-28 21:00:00'),(6,6,'12000','2018-03-28 21:00:00'),(7,7,'14000','2018-03-28 21:00:00'),(8,8,'16000','2018-03-28 21:00:00'),(9,9,'18000','2018-03-28 21:00:00'),(17,1,'16000','2018-03-28 21:00:00'),(18,2,'18000','2018-03-28 21:00:00'),(19,3,'6000','2018-03-28 21:00:00'),(20,4,'4000','2018-03-28 21:00:00');
/*!40000 ALTER TABLE `loans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_credentials`
--

DROP TABLE IF EXISTS `login_credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login_credentials` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `login_credentials_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This is login table, where username and password is stored';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_credentials`
--

LOCK TABLES `login_credentials` WRITE;
/*!40000 ALTER TABLE `login_credentials` DISABLE KEYS */;
INSERT INTO `login_credentials` VALUES (1,'test1','e10adc3949ba59abbe56e057f20f883e'),(2,'test2','e10adc3949ba59abbe56e057f20f883e'),(3,'test3','e10adc3949ba59abbe56e057f20f883e'),(4,'test4','e10adc3949ba59abbe56e057f20f883e'),(5,'test5','e10adc3949ba59abbe56e057f20f883e'),(6,'test6','e10adc3949ba59abbe56e057f20f883e'),(7,'test7','e10adc3949ba59abbe56e057f20f883e'),(8,'test8','e10adc3949ba59abbe56e057f20f883e'),(9,'test9','e10adc3949ba59abbe56e057f20f883e'),(10,'test10','e10adc3949ba59abbe56e057f20f883e'),(11,'test11','e10adc3949ba59abbe56e057f20f883e'),(12,'test12','e10adc3949ba59abbe56e057f20f883e'),(13,'test13','e10adc3949ba59abbe56e057f20f883e'),(14,'test14','e10adc3949ba59abbe56e057f20f883e'),(15,'test15','e10adc3949ba59abbe56e057f20f883e'),(16,'test16','e10adc3949ba59abbe56e057f20f883e');
/*!40000 ALTER TABLE `login_credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `postalcode` char(5) COLLATE utf8_unicode_520_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `ocupation` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
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
INSERT INTO `users` VALUES (1,'Test','One','Oulu','Kajaanintie 7','90114','test1@test.com','046-123-6698','Teacher','test1','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(2,'Ma','Man','','Bro Streen 22','12345','boydogman96@broland.bro','','','test2','e10adc3949ba59abbe56e057f20f883e','2018-03-20 09:10:59'),(3,'Test','Three','Oulu','Kirkko tie 1','90113','test2@test.com','046-123-5432','Nurse','test3','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(4,'Test','Four','Oulu','Test avenue 2','90112','test3@test.com','046-123-6543','Production Manager','test4','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(5,'Test','Five','Imatra','Test avenue 3','90111','test4@test.com','046-123-4651','Singer','test5','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(6,'Test','Six','Utsjoki','Test avenue 4','90110','test5@test.com','046-123-7654','Accoundant','test6','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(7,'Test','Seven','Kemi','Test avenue 14','90129','test6@test.com','046-123-8745','Student','test7','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(8,'Test','Eight','Nivala','Test avenue 12','90128','test7@test.com','046-123-987','House wife','test8','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(9,'Test','Nine','Haapavesi','Test avenue 6','90127','test8@test.com','046-789-4567','Unemployed','test9','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(10,'Test','Ten','Oulainen','Test avenue 62','90126','test9@test.com','046-456-4567','Cleaner','test10','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(11,'Test','Eleve','Turku','Test street 2','90125','test11@test.com','046-123-7894','Store Casher','test11','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(12,'Test','Tweleve','Tampere','Test street 32','90124','test12@test.com','046-234-4567','Fund manager','test12','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(13,'Test','Thirteen','Vaasa','Test street 1','90119','test13@test.com','044-123-4567','Police','test13','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(14,'Test','Fourteen','Rovaniemi','Test street 13','90120','test14@test.com','040-123-4567','Engineer','test14','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(15,'Test','Fifteen','Helsinki','Test street 55','90121','test15@test.com','046-321-4567','Car mechanics','test15','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00'),(16,'Test','Sixteen','Kajaani','Test street 870','90122','test16@test.com','046-123-1234','Fireman','test16','e10adc3949ba59abbe56e057f20f883e','2018-03-28 21:00:00');
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

-- Dump completed on 2018-04-13 20:31:42
