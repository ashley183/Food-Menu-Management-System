USE food_menu_db;

-- Clear all existing data to ensure a clean start
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE ITEM_INGREDIENTS;
TRUNCATE TABLE MENU_ITEMS;
TRUNCATE TABLE INGREDIENTS;
TRUNCATE TABLE CATEGORIES;
SET FOREIGN_KEY_CHECKS = 1;

-- 📂 CATEGORIES
INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('🍽️ All Main Menu Items', 'Complete list of our primary offerings', 1);
SET @main_menu_id = LAST_INSERT_ID();

INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('🍗 Protein-Based', 'Items categorized by protein source', 2);
SET @protein_based_id = LAST_INSERT_ID();

INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('🌱 Dietary / Lifestyle', 'Specialized dietary and lifestyle choices', 3);
SET @dietary_id = LAST_INSERT_ID();

INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('🍝 Cuisine / Style-Based', 'Regional and culinary style favorites', 4);
SET @cuisine_id = LAST_INSERT_ID();

INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('☕ Drinks & Extras', 'Beverages and side orders', 5);
SET @drinks_id = LAST_INSERT_ID();

-- 🍔 MENU ITEMS: All Main Menu Items
INSERT INTO MENU_ITEMS (category_id, name, description, price) VALUES
(@main_menu_id, 'Grilled Chicken Plate', 'Juicy grilled chicken served with rice and vegetables.', 12.50),
(@main_menu_id, 'Beef Steak Meal', 'Tender beef slices cooked in savory sauce.', 15.99),
(@main_menu_id, 'Pork BBQ Skewers', 'Sweet and smoky grilled pork on sticks.', 10.99),
(@main_menu_id, 'Fried Fish Fillet', 'Crispy fish served with tartar sauce.', 11.50),
(@main_menu_id, 'Chicken Alfredo Pasta', 'Creamy pasta topped with grilled chicken.', 13.99),
(@main_menu_id, 'Spaghetti Bolognese', 'Pasta with rich tomato and meat sauce.', 12.99),
(@main_menu_id, 'Cheeseburger Meal', 'Classic burger with fries and drink.', 11.00),
(@main_menu_id, 'Fried Rice Combo', 'Flavorful rice with mixed meats and vegetables.', 10.50),
(@main_menu_id, 'Chicken Curry', 'Chicken simmered in creamy, spiced curry sauce.', 12.99),
(@main_menu_id, 'Sweet and Sour Pork', 'Crispy pork in tangy sauce.', 11.99);

-- 🥩 MENU ITEMS: Protein-Based
INSERT INTO MENU_ITEMS (category_id, name, description, price) VALUES
(@protein_based_id, 'Garlic Butter Chicken', 'Chicken sautéed in garlic and butter sauce.', 12.99),
(@protein_based_id, 'Beef Tapa', 'Marinated beef strips served with rice and egg.', 11.50),
(@protein_based_id, 'Crispy Pork Belly', 'Deep-fried pork belly with crunchy skin.', 14.99),
(@protein_based_id, 'Grilled Shrimp Skewers', 'Fresh shrimp grilled with herbs.', 15.50),
(@protein_based_id, 'Fish Sinigang', 'Sour tamarind soup with fish and vegetables.', 12.50),
(@protein_based_id, 'Chicken Wings', 'Fried wings coated in choice of sauce.', 9.99),
(@protein_based_id, 'Beef Burger Patty', 'Juicy grilled beef patty in a bun.', 10.50),
(@protein_based_id, 'Pork Chop Meal', 'Fried or grilled pork chop with sides.', 12.99),
(@protein_based_id, 'Seafood Platter', 'Mixed seafood served grilled or fried.', 18.99),
(@protein_based_id, 'Lamb Kebabs', 'Skewered lamb grilled with spices.', 16.50);

-- 🥗 MENU ITEMS: Dietary / Lifestyle
INSERT INTO MENU_ITEMS (category_id, name, description, price) VALUES
(@dietary_id, 'Vegetable Stir-Fry', 'Mixed vegetables sautéed in light sauce.', 10.50),
(@dietary_id, 'Vegan Burger', 'Plant-based patty with fresh toppings.', 12.99),
(@dietary_id, 'Gluten-Free Grilled Chicken', 'Simply seasoned grilled chicken.', 12.50),
(@dietary_id, 'Low-Carb Salad Bowl', 'Greens with protein and light dressing.', 11.50),
(@dietary_id, 'Quinoa Veggie Bowl', 'Healthy grain bowl with vegetables.', 11.99),
(@dietary_id, 'Tofu Curry', 'Tofu cooked in mild curry sauce.', 10.99),
(@dietary_id, 'Zucchini Noodles', 'Pasta alternative made from fresh zucchini.', 11.50),
(@dietary_id, 'Fresh Garden Salad', 'Crisp vegetables with vinaigrette.', 8.99),
(@dietary_id, 'Steamed Fish with Herbs', 'Light and healthy seafood dish.', 13.50),
(@dietary_id, 'Fruit Bowl', 'Assorted fresh seasonal fruits.', 7.50);

-- 🍜 MENU ITEMS: Cuisine / Style-Based
INSERT INTO MENU_ITEMS (category_id, name, description, price) VALUES
(@cuisine_id, 'Italian Carbonara', 'Creamy pasta with bacon and cheese.', 13.50),
(@cuisine_id, 'Japanese Ramen', 'Noodle soup with rich broth and toppings.', 14.50),
(@cuisine_id, 'Chinese Fried Rice', 'Stir-fried rice with egg and vegetables.', 10.99),
(@cuisine_id, 'Korean Bibimbap', 'Rice bowl with mixed vegetables and meat.', 13.99),
(@cuisine_id, 'Filipino Adobo', 'Meat braised in soy sauce and vinegar.', 12.50),
(@cuisine_id, 'Pizza Margherita', 'Classic pizza with tomato and cheese.', 11.99),
(@cuisine_id, 'Pad Thai', 'Stir-fried noodles with sweet and savory sauce.', 12.99),
(@cuisine_id, 'Grilled BBQ Ribs', 'Slow-cooked ribs with smoky glaze.', 16.99),
(@cuisine_id, 'Fish and Chips', 'Fried fish with crispy fries.', 12.50),
(@cuisine_id, 'Chicken Shawarma', 'Wrapped flatbread with seasoned chicken.', 10.99);

-- ☕ MENU ITEMS: Drinks & Extras
INSERT INTO MENU_ITEMS (category_id, name, description, price) VALUES
(@drinks_id, 'Iced Coffee', 'Chilled coffee served over ice.', 4.50),
(@drinks_id, 'Hot Latte', 'Espresso with steamed milk.', 4.99),
(@drinks_id, 'Fresh Lemonade', 'Sweet and tangy citrus drink.', 3.50),
(@drinks_id, 'Mango Smoothie', 'Blended mango with ice and milk.', 5.50),
(@drinks_id, 'Chocolate Milkshake', 'Creamy chocolate-flavored shake.', 5.99),
(@drinks_id, 'Soft Drinks', 'Carbonated beverages served chilled.', 2.50),
(@drinks_id, 'Bottled Water', 'Refreshing still water.', 1.50),
(@drinks_id, 'French Fries', 'Crispy potato fries as a side.', 4.50),
(@drinks_id, 'Onion Rings', 'Deep-fried battered onion slices.', 5.50),
(@drinks_id, 'Garlic Bread', 'Toasted bread with garlic butter.', 3.99),
(@drinks_id, 'Extra Rice', 'Steamed rice served as an add-on.', 2.00),
(@drinks_id, 'Dipping Sauces', 'Variety of sauces for added flavor.', 0.99);

-- 🧂 INGREDIENTS
INSERT INTO INGREDIENTS (name, is_allergen) VALUES
('Chicken', FALSE), ('Beef', FALSE), ('Pork', FALSE), ('Shrimp', TRUE), ('Fish', TRUE),
('Garlic', FALSE), ('Butter', TRUE), ('Egg', TRUE), ('Wheat Flour', TRUE), ('Soy Sauce', TRUE),
('Milk', TRUE), ('Cheese', TRUE), ('Rice', FALSE), ('Tofu', FALSE);
