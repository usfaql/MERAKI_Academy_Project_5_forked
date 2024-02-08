
CREATE TABLE roles (
    id SERIAL NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE permissions (
    id SERIAL NOT NULL,
    permission VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    );

CREATE TABLE role_permission (
    id SERIAL NOT NULL,
    role_id INT,
    permission_id INT,
    FOREIGN KEY (role_id ) REFERENCES roles (id),
    FOREIGN KEY (permission_id) REFERENCES permissions (id),
    PRIMARY KEY (id)
);


CREATE TABLE users(
    id SERIAL NOT NULL,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    age INT,
    gender VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    is_deleted SMALLINT DEFAULT 0,
    PRIMARY KEY (id)
);


CREATE TABLE user_info (
    id SERIAL NOT NULL,
    weight VARCHAR(255),
    height VARCHAR(255),
    goal VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    is_deleted SMALLINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE gyms(
    id SERIAL NOT NULL,
    name VARCHAR(255),
    description TEXT,
    owner_id INT,
    FOREIGN KEY (owner_id) REFERENCES users(id),
    is_deleted SMALLINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE gym_user(
    id SERIAL NOT NULL,
    user_id INT,
    gym_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (gym_id) REFERENCES gyms(id),
    is_deleted SMALLINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE gym_coach(
   id SERIAL NOT NULL,
    coach_id INT,
    gym_id INT,
    FOREIGN KEY (coach_id) REFERENCES users(id),
    FOREIGN KEY (gym_id) REFERENCES gyms(id),
    is_deleted SMALLINT DEFAULT 0,
    PRIMARY KEY (id)
);