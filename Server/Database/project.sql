DROP DATABASE IF EXISTS CanteenProject;
-- create database CanteenProject;
-- use CanteenProject;
-- -- users table
-- create table users
-- (
--     user_id int primary key auto_increment,
--     name varchar(50) not null,
--     email varchar(50) unique,
--     password varchar(200) not null,
--     Role ENUM('student', 'teacher', 'guest'),
--     created_at timestamp DEFAULT CURRENT_TIMESTAMP
-- );
-- -- Demo Data
-- INSERT INTO users (name, email, password, Role) VALUES
-- ('Alice', 'alice@example.com', 'hashed_pw1', 'student'),
-- ('Bob', 'bob@example.com', 'hashed_pw2', 'teacher'),
-- ('Charlie', 'charlie@example.com', 'hashed_pw3', 'guest'),
-- ('Diana', 'diana@example.com', 'hashed_pw4', 'student'),
-- ('Ethan', 'ethan@example.com', 'hashed_pw5', 'teacher');
--  -- orders table
-- create table orders
-- (
--   order_id int primary key auto_increment,
--   user_id int not null ,
--   token_id varchar(10) unique not null,
--   total_price DECIMAL(10,2) not null,
--   Status ENUM('pending', 'preparing', 'ready', 'picked_up', 'cancelled'),
--   order_time timestamp DEFAULT CURRENT_TIMESTAMP,
--   pickup_time DATETIME,
--   FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
-- );
-- -- Demo Data
-- INSERT INTO orders (user_id, token_id, total_price, Status, pickup_time) VALUES
-- (1, 'TK1001', 85.00, 'pending', '2025-05-13 10:30:00'),
-- (2, 'TK1002', 40.00, 'ready', '2025-05-13 11:00:00'),
-- (3, 'TK1003', 60.00, 'preparing', '2025-05-13 11:15:00'),
-- (4, 'TK1004', 70.00, 'picked_up', '2025-05-13 11:45:00'),
-- (5, 'TK1005', 35.00, 'cancelled', '2025-05-13 12:00:00');
-- -- order item table
-- create table order_items
-- (
--    order_item_id int primary key auto_increment,
--    order_id int not null,
--    item_id int not null,
--    quantity int not null CHECK (quantity > 0),
--    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
--    FOREIGN KEY (item_id) REFERENCES menu_items(item_id) ON DELETE CASCADE
-- );
-- -- Demo Data
-- INSERT INTO order_items (order_id, item_id, quantity) VALUES
-- (1, 1, 1), (1, 3, 1),
-- (2, 3, 1),
-- (3, 4, 1),
-- (4, 2, 1),
-- (5, 5, 1);
-- -- menu items table
-- create table menu_items
-- (
--     item_id int primary key auto_increment,
--     name varchar(50),
--     description text not null,
--     price decimal not null CHECK (price >= 0),
--     isAvailable boolean not null,
--     created_at timestamp DEFAULT CURRENT_TIMESTAMP
-- );
-- -- Demo Data
-- INSERT INTO menu_items (name, description, price, isAvailable) VALUES
-- ('Veg Sandwich', 'Whole wheat sandwich with veggies', 45.00, TRUE),
-- ('Chicken Roll', 'Grilled chicken in flatbread', 70.00, TRUE),
-- ('Cold Coffee', 'Iced coffee with cream', 40.00, TRUE),
-- ('Paneer Wrap', 'Spicy paneer with lettuce', 60.00, TRUE),
-- ('Fruit Juice', 'Mixed fruit juice', 35.00, TRUE);
-- -- admin table
-- create table admin
-- (
--     admin_id int primary key auto_increment,
--     name varchar(50) not null,
--     email varchar(50) unique,
--     password varchar(200)
-- );
-- INSERT INTO admin (name, email, password) VALUES
-- ('Admin One', 'admin1@canteen.com', 'admin_pw1'),
-- ('Admin Two', 'admin2@canteen.com', 'admin_pw2');
-- -- payment table
-- CREATE TABLE payment (
--     payment_id INT PRIMARY KEY AUTO_INCREMENT,
--     order_id INT,
--     amount DECIMAL(10,2),
--     payment_method ENUM('cash', 'card', 'upi'),
--     payment_status ENUM('paid', 'failed', 'pending'),
--     payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
-- );
-- -- Demo Data
-- INSERT INTO payment (order_id, amount, payment_method, payment_status) VALUES
-- (1, 85.00, 'upi', 'paid'),
-- (2, 40.00, 'card', 'paid'),
-- (3, 60.00, 'cash', 'pending'),
-- (4, 70.00, 'card', 'paid'),
-- (5, 35.00, 'upi', 'failed');
-- -- Logging Table
-- CREATE TABLE activity_logs (
--     log_id INT PRIMARY KEY AUTO_INCREMENT,
--     admin_id INT,
--     action VARCHAR(255),
--     timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (admin_id) REFERENCES admin(admin_id)
-- );
-- -- Demo Data
-- INSERT INTO activity_logs (admin_id, action)
-- VALUES
-- (1, 'Logged in'),
-- (2, 'Updated menu prices'),
-- (1, 'Added new food item to the menu'),
-- (3, 'Removed food item from the menu'),
-- (2, 'Viewed order history'),
-- (1, 'Logged out');
-- -- Rating Table
-- CREATE TABLE feedback (
--     feedback_id INT PRIMARY KEY AUTO_INCREMENT,
--     user_id INT,
--     order_id INT,
--     rating INT CHECK (rating BETWEEN 1 AND 5),
--     comment TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(user_id),
--     FOREIGN KEY (order_id) REFERENCES orders(order_id)
-- );
-- -- demo data
-- INSERT INTO feedback (user_id, order_id, rating, comment)
-- VALUES
-- (1, 101, 5, 'Excellent service, will definitely order again!'),
-- (2, 102, 4, 'Good food, but delivery was a bit late.'),
-- (3, 103, 3, 'The food was okay, could use more variety.'),
-- (1, 104, 2, 'Not satisfied, the food was cold when it arrived.'),
-- (2, 105, 4, 'Great taste, but the portion size could be bigger.');
CREATE DATABASE CanteenProject;
USE CanteenProject;
-- USERS
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE,
  password VARCHAR(200) NOT NULL,
  Role ENUM('student', 'teacher', 'guest'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- ADMIN
CREATE TABLE admin (
  admin_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE,
  password VARCHAR(200)
);
-- MENU ITEMS
CREATE TABLE menu_items (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
  isAvailable BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- ORDERS
CREATE TABLE orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  token_id VARCHAR(10) UNIQUE NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  Status ENUM(
    'pending',
    'preparing',
    'ready',
    'picked_up',
    'cancelled'
  ),
  order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  pickup_time DATETIME,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
-- ORDER ITEMS
CREATE TABLE order_items (
  order_item_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),
  FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
  FOREIGN KEY (item_id) REFERENCES menu_items(item_id) ON DELETE CASCADE
);
-- PAYMENT
CREATE TABLE payment (
  payment_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,
  amount DECIMAL(10, 2),
  payment_method ENUM('cash', 'card', 'upi'),
  payment_status ENUM('paid', 'failed', 'pending'),
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
);
-- ACTIVITY LOGS
CREATE TABLE activity_logs (
  log_id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT,
  action VARCHAR(255),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES admin(admin_id)
);
-- FEEDBACK
CREATE TABLE feedback (
  feedback_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  order_id INT,
  rating INT CHECK (
    rating BETWEEN 1 AND 5
  ),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
);