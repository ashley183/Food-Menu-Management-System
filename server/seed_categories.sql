USE food_menu_db;

-- Clear existing categories to prevent duplicates
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE CATEGORIES;
SET FOREIGN_KEY_CHECKS = 1;

-- Top-level categories
INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('Main Menu', 'All main menu items', 1);
SET @main_menu_id = LAST_INSERT_ID();

INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('Protein-Based', 'Items categorized by protein type', 2);
SET @protein_based_id = LAST_INSERT_ID();

INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('Dietary / Lifestyle', 'Dietary specific choices', 3);
SET @dietary_id = LAST_INSERT_ID();

INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('Cuisine / Style-Based', 'Categories by cuisine or cooking style', 4);
SET @cuisine_id = LAST_INSERT_ID();

INSERT INTO CATEGORIES (name, description, sort_order) VALUES ('Drinks & Extras', 'Beverages and additional items', 5);
SET @drinks_id = LAST_INSERT_ID();

-- 🍽️ Main Menu Categories
INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES
('Appetizers', 'Starters to kick off your meal', 10, @main_menu_id),
('Soups', 'Warm and comforting soups', 20, @main_menu_id),
('Salads', 'Fresh and healthy greens', 30, @main_menu_id),
('Main Courses / Entrées', 'Hearty and filling main dishes', 40, @main_menu_id),
('Side Dishes', 'Perfect accompaniments to your meal', 50, @main_menu_id),
('Desserts', 'Sweet treats to end your meal', 60, @main_menu_id),
('Beverages', 'Refreshing drinks and sodas', 70, @main_menu_id),
('Breakfast', 'Morning favorites', 80, @main_menu_id),
('Brunch', 'Late morning delights', 90, @main_menu_id),
('Lunch Specials', 'Mid-day deals', 100, @main_menu_id),
('Dinner Specials', 'Evening highlights', 110, @main_menu_id);

-- 🍗 Protein-Based Categories
INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES
('Chicken Dishes', 'Delicious poultry options', 120, @protein_based_id),
('Beef Dishes', 'Premium beef selections', 130, @protein_based_id),
('Pork Dishes', 'Savory pork specialties', 140, @protein_based_id),
('Seafood', 'Fresh from the ocean', 150, @protein_based_id);

-- 🌱 Dietary / Lifestyle Categories
INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES
('Vegetarian', 'Meat-free options', 160, @dietary_id),
('Vegan', 'Plant-based dishes', 170, @dietary_id),
('Gluten-Free', 'Wheat-free alternatives', 180, @dietary_id),
('Healthy Options / Low-Calorie', 'Nutritious and light meals', 190, @dietary_id);

-- 🍝 Cuisine / Style-Based Categories
INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES
('Pasta', 'Classic Italian-style pasta', 200, @cuisine_id),
('Pizza', 'Hand-crafted pizzas', 210, @cuisine_id),
('Rice Meals', 'Satisfying rice-based dishes', 220, @cuisine_id),
('Noodles', 'Asian-inspired noodle dishes', 230, @cuisine_id),
('Grilled / BBQ', 'Charcoal-grilled favorites', 240, @cuisine_id),
('Street Food', 'Quick and tasty snacks', 250, @cuisine_id),
('Fusion Dishes', 'Creative culinary blends', 260, @cuisine_id);

-- ☕ Drinks & Extras
INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES
('Hot Drinks (Coffee, Tea)', 'Warm beverages', 270, @drinks_id),
('Cold Drinks / Refreshments', 'Chilled drinks', 280, @drinks_id),
('Alcoholic Beverages', 'Spirits, wine, and beer', 290, @drinks_id),
('Smoothies / Shakes', 'Blended fruit and cream drinks', 300, @drinks_id);
