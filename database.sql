-- create new database in Postico named "civicly"

CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (255) NOT NULL,
    "isAdmin" BOOLEAN DEFAULT 'false',
    "image_url" TEXT,
    "upvotes" INT,
    "zipcode" INT
);


CREATE TABLE "Subcategories" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255),
    "category" INT
);


CREATE TABLE "Ticket" (
    "id" SERIAL PRIMARY KEY,
    "image_url" TEXT,
    "description" TEXT,
    "status" TEXT,
    "date" TIMESTAMPTZ,
    "upvotes" INT,
    "category" TEXT,
    "user_id" SERIAL REFERENCES "User"("id"),
    "anonymous" BOOLEAN,
    "subcategory_id" SERIAL REFERENCES "Subcategories"("id"),
    "latitude" VARCHAR(255),
    "longitude" VARCHAR(255)
);

CREATE TABLE "Notifications" (
    "id" SERIAL PRIMARY KEY,
    "user_id" SERIAL REFERENCES "User"("id"),
    "ticket_id" SERIAL REFERENCES "Ticket"("id"),
    "comments" TEXT,
    "timestamp" TIMESTAMP,
    "notification_status" TEXT,
    "is_hidden" BOOLEAN DEFAULT FALSE
);


-- This populates the subcategories 
    -- the category column is an enum stored as an int. They key is as follows:
        -- 0 == Accessibility
        -- 1 == Animal Control
        -- 2 == Biking
        -- 3 == Garbage and Recycling
        -- 4 == Graffiti
        -- 5 == Health and Environmental
        -- 6 == Parking
        -- 7 == Property
        -- 8 == Sidewalks and Streets

INSERT INTO "Subcategories" ( "name", "category")
VALUES 
    ('Public Transit Issues', 0),
    ('Sidewalk/Curb Issues', 0),
    ('Animal Complaint - Livability', 1),
    ('Animal Complaint - Public Health', 1),
    ('Deceased Animal Pick Up', 1),
    ('Abandoned / Illegally Parked Bicycle / Scooter', 2),
    ('Bike Lane Issue', 2),
    ('Bike Trail Safety - Parks', 2),
    ('Illegal Dumping', 3),
    ('Litter / Overflow', 3),
    ('Graffiti', 4),
    ('Air Pollution Complaint', 5),
    ('Commercial Food Safety/Sanitation Complaint', 5),
    ('Emergency Pollution Complaint', 5),
    ('Env Mgmt Callback Request', 5),
    ('Food Safety Callback', 5),
    ('Land Pollution Complaint', 5),
    ('Lead Inquiry', 5),
    ('Noise Pollution Complaint', 5),
    ('Pollution Control Annual Registration - PCAR', 5),
    ('Syringe Litter Concern Pilot Project', 5),
    ('Urgent Pollution Complaint', 5),
    ('Water Pollution Complaint', 5),
    ('Abandoned Vehicle', 6),
    ('Alley Blocked', 6),
    ('Bike Lane Blocked', 6),
    ('Bridge / Bridge Approach', 6),
    ('Bus Stop', 6),
    ('Crosswalk', 6),
    ('Curb - over 12 in from', 6),
    ('Double Parked', 6),
    ('Driveway Blocked', 6),
    ('Expired Meter', 6),
    ('Expired Registration', 6),
    ('Fire Hydrant', 6),
    ('Fire Lane', 6),
    ('Handicap w/o Permit', 6),
    ('Hooded Meter', 6),
    ('Limited Time Zone', 6),
    ('No License Plate', 6),
    ('No Parking Zone', 6),
    ('Obstructing Traffic', 6),
    ('Other', 6),
    ('Registration Expired', 6),
    ('School Zone', 6),
    ('Sidewalk Blocked', 6),
    ('Stop Sign - within 30 ft.', 6),
    ('Winter Parking Ban Violaion', 6),
    ('Grass / Weed Complaint - Private Property', 7),
    ('Homeless Encampment', 7),
    ('Noise Complaint', 7),
    ('Residential Conditions Complaint', 7),
    ('Snow - Illegal Dumping', 7),
    ('Unpermitted Work', 7),
    ('Debris in Street or Alley', 8),
    ('Grass / Weed Complaint - Public Property', 8),
    ('Pothole', 8),
    ('Sidewalk - Repair Needed', 8),
    ('Sidewalk - Snow / Ice Removal', 8),
    ('Street Cleaning', 8),
    ('Street Light Trouble / Outage', 8),
    ('Traffic Light Trouble / Outage', 8),
    ('Traffic Sign Repair', 8);


-- You will need to create an account in the user id = 1 in order to run
-- the following query
INSERT INTO "Ticket" ("image_url", "description", "status", "upvotes", "category", "user_id", "anonymous", "subcategory_id", "latitude", "longitude")
VALUES 
	('https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Pothole.jpg/1200px-Pothole.jpg',
	 'this is the description', 'open', 1, 8, 1, 'true', 57, 44.9778, -93.2650),
	 ('https://cdn.britannica.com/93/171293-050-D99BEDB2/Graffiti-Berlin-Wall.jpg',
	 'this is the description', 'open', 1, 4, 1, 'true', 11, 44.9878, -93.2750),
	 ('https://media.bizj.us/view/img/11283236/img4402*1200xx4032-2265-0-17.jpg',
	 'this is the description', 'open', 2, 6, 1, 'true', 24, 44.9678, -93.2550);


-- Notifications Dummy Data!

INSERT INTO "Notifications" ("user_id", "ticket_id", "comments", "timestamp", "notification_status")
VALUES (1, 1, 'This was the huge pothole', '2021-01-14 13:10:25-07', 'open'), 
        (1, 2, 'Spray paint on the Berlin Wall', '2023-01-22 19:10:25-07', 'closed'), 
        (1, 3, 'Some guy did not shovel', '2023-01-04 19:10:25-07', 'closed'); 
