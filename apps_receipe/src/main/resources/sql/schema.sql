CREATE TABLE IF NOT EXISTS food (
    id INT PRIMARY KEY AUTO_INCREMENT,
    food_description VARCHAR(255),
    food_name VARCHAR(255) NOT NULL,
    food_category VARCHAR(100),
    popularity INT,
    price FLOAT,
    is_allergen BOOLEAN DEFAULT FALSE,
    image_url   VARCHAR(500),
    created_at  TIMESTAMP   DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by  VARCHAR(20)                           NOT NULL,
    updated_at  TIMESTAMP   DEFAULT NULL,
    updated_by  VARCHAR(20) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS contact (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL ,
    email VARCHAR(255) NOT NULL,
    contact_no VARCHAR(100),
    comment VARCHAR(255),
    created_at  TIMESTAMP   DEFAULT CURRENT_TIMESTAMP NOT NULL

);

CREATE TABLE IF NOT EXISTS user (
                                    id BIGINT PRIMARY KEY AUTO_INCREMENT,
                                    first_name VARCHAR(255) NOT NULL CHECK (first_name <> ''),
                                    last_name VARCHAR(255) NOT NULL CHECK (last_name <> ''),
                                    email VARCHAR(320) NOT NULL UNIQUE,
                                    password_hash VARCHAR(255) NOT NULL,
                                    role ENUM('admin', 'user') NOT NULL DEFAULT 'user',
                                    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
