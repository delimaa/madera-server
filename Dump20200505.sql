-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: madera
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `adresse` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (7,'Doe','Joe','{\"voie\": \"rue Rimon\", \"ville\": \"Lille\", \"numero\": 10, \"codePostal\": \"59000\"}'),(8,'Doe','Phil','{\"voie\": \"100 rue Bodimont\", \"ville\": \"Clayon\", \"numero\": 45, \"codePostal\": \"78650\"}'),(9,'Dupont','Hervé','{\"voie\": \"boulevard Hermitage\", \"ville\": \"Paris\", \"numero\": 15, \"codePostal\": \"95000\"}'),(13,'aa','aa','{\"voie\": \"rue du Marais\", \"ville\": \"Grion\", \"numero\": 12, \"codePostal\": \"54896\"}');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gamme`
--

DROP TABLE IF EXISTS `gamme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gamme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `finition` varchar(255) NOT NULL,
  `isolant` varchar(255) NOT NULL,
  `couverture` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gamme`
--

LOCK TABLES `gamme` WRITE;
/*!40000 ALTER TABLE `gamme` DISABLE KEYS */;
INSERT INTO `gamme` VALUES (1,'Standard','Crépis','Synthétique','Tuiles'),(2,'Premium','Bois','Biologique','Tuiles'),(3,'Luxe','Bois','Naturel','Ardoises');
/*!40000 ALTER TABLE `gamme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module`
--

DROP TABLE IF EXISTS `module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `module` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `projetId` int(11) DEFAULT NULL,
  `dimensions` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `prix` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_d7163bc6fcb847d426fbbb4bc80` (`projetId`),
  CONSTRAINT `FK_d7163bc6fcb847d426fbbb4bc80` FOREIGN KEY (`projetId`) REFERENCES `projet` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module`
--

LOCK TABLES `module` WRITE;
/*!40000 ALTER TABLE `module` DISABLE KEYS */;
INSERT INTO `module` VALUES (17,'Mur Nord ',16,'400 x 220','Murs extérieurs',6122),(18,'Mur Sud',16,'400 x 220','Murs extérieurs',9740),(19,'Couverture intégrale',16,'700 x 400','Couverture',13911),(20,'Mur Nord',17,'400 X 220','Murs extérieurs',9557),(21,'Mur Sud',17,'400 X 220','Murs extérieurs',6292),(22,'Cloison 1',17,'300 X 220','Cloisons intérieures',5672),(23,'Cloison 2',17,'340 X 200','Cloisons intérieures',3843),(24,'Plancher Salon',17,'600 X 400','Plancher sur dalle',12509),(25,'Porteur',17,'800 X 600','Plancher porteur',10706),(26,'Couverture totale',17,'800 x 800','Couverture',16363);
/*!40000 ALTER TABLE `module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projet`
--

DROP TABLE IF EXISTS `projet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `clientId` int(11) DEFAULT NULL,
  `gammeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_de93f47b3e2af70312281696562` (`clientId`),
  KEY `FK_2354add2e5e8169a81b85625296` (`gammeId`),
  CONSTRAINT `FK_2354add2e5e8169a81b85625296` FOREIGN KEY (`gammeId`) REFERENCES `gamme` (`id`),
  CONSTRAINT `FK_de93f47b3e2af70312281696562` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projet`
--

LOCK TABLES `projet` WRITE;
/*!40000 ALTER TABLE `projet` DISABLE KEYS */;
INSERT INTO `projet` VALUES (16,'Projet 1','2020-03-06',7,3),(17,'Projet 2','2020-03-16',9,3);
/*!40000 ALTER TABLE `projet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-05 10:11:03
