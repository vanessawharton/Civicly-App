-- create new database in Postico named "civicly"

CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (255) NOT NULL,
    "isAdmin" BOOLEAN,
    "image_url" TEXT,
    "upvotes" INT
);

CREATE TABLE "Notifications" (
    "id" SERIAL PRIMARY KEY,
    "user_id" SERIAL FOREIGN KEY REFERENCES "User"("id"),
    "ticket_id" SERIAL FOREIGN KEY REFERENCES "Ticket"("id"),
    "comments" TEXT,
    "timestamp" TIMESTAMP,
    "notification_status" TEXT
);

CREATE TABLE "Ticket" (
    "id" BIGINT PRIMARY KEY,
    "image_url" TEXT,
    "description" TEXT,
    "status" TEXT,
    "date" TIMESTAMPTZ,
    "upvotes" INT,
    "category" TEXT,
    "user_id" SERIAL FOREIGN KEY REFERENCES "User"("id"),
    "anonymous" BOOLEAN,
    "subcategory_id" SERIAL FOREIGN KEY REFERENCES "Subcategories"("id"),
    "latitude" VARCHAR(255),
    "longitude" VARCHAR(255)
);

CREATE TABLE "Subcategories" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255),
    "category" INT(255)
);

