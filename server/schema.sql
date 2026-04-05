CREATE DATABASE IF NOT EXISTS food_menu_db;
USE food_menu_db;

CREATE TABLE CATEGORIES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    sort_order INT DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    parent_id INT DEFAULT NULL,
    FOREIGN KEY (parent_id) REFERENCES CATEGORIES(id) ON DELETE CASCADE
);

CREATE TABLE MENU_ITEMS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES CATEGORIES(id) ON DELETE CASCADE
);

CREATE TABLE INGREDIENTS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_allergen BOOLEAN DEFAULT FALSE
);

CREATE TABLE ITEM_INGREDIENTS (
    menu_item_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity VARCHAR(255),
    PRIMARY KEY (menu_item_id, ingredient_id),
    FOREIGN KEY (menu_item_id) REFERENCES MENU_ITEMS(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES INGREDIENTS(id) ON DELETE CASCADE
);

-- Seed Initial Categories
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

INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES ('Appetizers', 'Starters', 10, @main_menu_id);
INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES ('Main Course', 'Hearty dishes', 20, @main_menu_id);
INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES ('Desserts', 'Sweet treats', 30, @main_menu_id);
INSERT INTO CATEGORIES (name, description, sort_order, parent_id) VALUES ('Beverages', 'Drinks', 40, @main_menu_id);
