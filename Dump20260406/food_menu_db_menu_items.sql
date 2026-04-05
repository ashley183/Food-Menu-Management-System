-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: food_menu_db
-- ------------------------------------------------------
-- Server version	8.0.45

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
-- Dumping data for table `menu_items`
--

LOCK TABLES `menu_items` WRITE;
/*!40000 ALTER TABLE `menu_items` DISABLE KEYS */;
INSERT INTO `menu_items` VALUES (1,1,'Grilled Chicken Plate','Juicy grilled chicken served with rice and vegetables.',12.50,NULL,1,'2026-04-05 19:11:12'),(2,1,'Beef Steak Meal','Tender beef slices cooked in savory sauce.',15.99,NULL,1,'2026-04-05 19:11:12'),(3,1,'Pork BBQ Skewers','Sweet and smoky grilled pork on sticks.',10.99,NULL,1,'2026-04-05 19:11:12'),(4,1,'Fried Fish Fillet','Crispy fish served with tartar sauce.',11.50,NULL,1,'2026-04-05 19:11:12'),(5,1,'Chicken Alfredo Pasta','Creamy pasta topped with grilled chicken.',13.99,NULL,1,'2026-04-05 19:11:12'),(6,1,'Spaghetti Bolognese','Pasta with rich tomato and meat sauce.',12.99,NULL,1,'2026-04-05 19:11:12'),(7,1,'Cheeseburger Meal','Classic burger with fries and drink.',11.00,NULL,1,'2026-04-05 19:11:12'),(8,1,'Fried Rice Combo','Flavorful rice with mixed meats and vegetables.',10.50,NULL,1,'2026-04-05 19:11:12'),(9,1,'Chicken Curry','Chicken simmered in creamy, spiced curry sauce.',12.99,NULL,1,'2026-04-05 19:11:12'),(10,1,'Sweet and Sour Pork','Crispy pork in tangy sauce.',11.99,NULL,1,'2026-04-05 19:11:12'),(11,2,'Garlic Butter Chicken','Chicken sautéed in garlic and butter sauce.',12.99,NULL,1,'2026-04-05 19:11:12'),(12,2,'Beef Tapa','Marinated beef strips served with rice and egg.',11.50,NULL,1,'2026-04-05 19:11:12'),(13,2,'Crispy Pork Belly','Deep-fried pork belly with crunchy skin.',14.99,NULL,1,'2026-04-05 19:11:12'),(14,2,'Grilled Shrimp Skewers','Fresh shrimp grilled with herbs.',15.50,NULL,1,'2026-04-05 19:11:12'),(15,2,'Fish Sinigang','Sour tamarind soup with fish and vegetables.',12.50,NULL,1,'2026-04-05 19:11:12'),(16,2,'Chicken Wings','Fried wings coated in choice of sauce.',9.99,NULL,1,'2026-04-05 19:11:12'),(17,2,'Beef Burger Patty','Juicy grilled beef patty in a bun.',10.50,NULL,1,'2026-04-05 19:11:12'),(18,2,'Pork Chop Meal','Fried or grilled pork chop with sides.',12.99,NULL,1,'2026-04-05 19:11:12'),(19,2,'Seafood Platter','Mixed seafood served grilled or fried.',18.99,NULL,1,'2026-04-05 19:11:12'),(20,2,'Lamb Kebabs','Skewered lamb grilled with spices.',16.50,NULL,1,'2026-04-05 19:11:12'),(21,3,'Vegetable Stir-Fry','Mixed vegetables sautéed in light sauce.',10.50,NULL,1,'2026-04-05 19:11:12'),(22,3,'Vegan Burger','Plant-based patty with fresh toppings.',12.99,NULL,1,'2026-04-05 19:11:12'),(23,3,'Gluten-Free Grilled Chicken','Simply seasoned grilled chicken.',12.50,NULL,1,'2026-04-05 19:11:12'),(24,3,'Low-Carb Salad Bowl','Greens with protein and light dressing.',11.50,NULL,1,'2026-04-05 19:11:12'),(25,3,'Quinoa Veggie Bowl','Healthy grain bowl with vegetables.',11.99,NULL,1,'2026-04-05 19:11:12'),(26,3,'Tofu Curry','Tofu cooked in mild curry sauce.',10.99,NULL,1,'2026-04-05 19:11:12'),(27,3,'Zucchini Noodles','Pasta alternative made from fresh zucchini.',11.50,NULL,1,'2026-04-05 19:11:12'),(28,3,'Fresh Garden Salad','Crisp vegetables with vinaigrette.',8.99,NULL,1,'2026-04-05 19:11:12'),(29,3,'Steamed Fish with Herbs','Light and healthy seafood dish.',13.50,NULL,1,'2026-04-05 19:11:12'),(30,3,'Fruit Bowl','Assorted fresh seasonal fruits.',7.50,NULL,1,'2026-04-05 19:11:12'),(31,4,'Italian Carbonara','Creamy pasta with bacon and cheese.',13.50,NULL,1,'2026-04-05 19:11:12'),(32,4,'Japanese Ramen','Noodle soup with rich broth and toppings.',14.50,NULL,1,'2026-04-05 19:11:12'),(33,4,'Chinese Fried Rice','Stir-fried rice with egg and vegetables.',10.99,NULL,1,'2026-04-05 19:11:12'),(34,4,'Korean Bibimbap','Rice bowl with mixed vegetables and meat.',13.99,NULL,1,'2026-04-05 19:11:12'),(35,4,'Filipino Adobo','Meat braised in soy sauce and vinegar.',12.50,NULL,1,'2026-04-05 19:11:12'),(36,4,'Pizza Margherita','Classic pizza with tomato and cheese.',11.99,NULL,1,'2026-04-05 19:11:12'),(37,4,'Pad Thai','Stir-fried noodles with sweet and savory sauce.',12.99,NULL,1,'2026-04-05 19:11:12'),(38,4,'Grilled BBQ Ribs','Slow-cooked ribs with smoky glaze.',16.99,NULL,1,'2026-04-05 19:11:12'),(39,4,'Fish and Chips','Fried fish with crispy fries.',12.50,NULL,1,'2026-04-05 19:11:12'),(40,4,'Chicken Shawarma','Wrapped flatbread with seasoned chicken.',10.99,NULL,1,'2026-04-05 19:11:12'),(41,5,'Iced Coffee','Chilled coffee served over ice.',4.50,NULL,1,'2026-04-05 19:11:12'),(42,5,'Hot Latte','Espresso with steamed milk.',4.99,NULL,1,'2026-04-05 19:11:12'),(43,5,'Fresh Lemonade','Sweet and tangy citrus drink.',3.50,NULL,1,'2026-04-05 19:11:12'),(44,5,'Mango Smoothie','Blended mango with ice and milk.',5.50,NULL,1,'2026-04-05 19:11:12'),(45,5,'Chocolate Milkshake','Creamy chocolate-flavored shake.',5.99,NULL,1,'2026-04-05 19:11:12'),(46,5,'Soft Drinks','Carbonated beverages served chilled.',2.50,NULL,1,'2026-04-05 19:11:12'),(47,5,'Bottled Water','Refreshing still water.',1.50,NULL,1,'2026-04-05 19:11:12'),(48,5,'French Fries','Crispy potato fries as a side.',4.50,NULL,1,'2026-04-05 19:11:12'),(49,5,'Onion Rings','Deep-fried battered onion slices.',5.50,NULL,1,'2026-04-05 19:11:12'),(50,5,'Garlic Bread','Toasted bread with garlic butter.',3.99,NULL,1,'2026-04-05 19:11:12'),(51,5,'Extra Rice','Steamed rice served as an add-on.',2.00,NULL,1,'2026-04-05 19:11:12'),(52,5,'Dipping Sauces','Variety of sauces for added flavor.',0.99,NULL,1,'2026-04-05 19:11:12');
/*!40000 ALTER TABLE `menu_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-06  3:53:54
