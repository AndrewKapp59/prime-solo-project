
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    user_type INTEGER NOT NULL DEFAULT 0
);

UPDATE "user" SET user_type = 1 WHERE username = 'Drew F Kapp';
UPDATE "user" SET user_type = 2 WHERE username = 'Andrew G Kapp';


CREATE TABLE fav_org (
    id SERIAL PRIMARY KEY,
    org_id INTEGER DEFAULT 0,
    user_id INTEGER DEFAULT 0
);

CREATE TABLE fav_prog (
    id SERIAL PRIMARY KEY,
    prog_id INTEGER DEFAULT 0
);

CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    org_name VARCHAR(100),
    org_location VARCHAR(250),
    img_url VARCHAR(3000),
    about VARCHAR(3000),
    fav BOOLEAN DEFAULT false,
    instagram_url VARCHAR(150) DEFAULT null,
    facebook_url VARCHAR(150) DEFAULT null,
    twitter_url VARCHAR(150) DEFAULT null
);


INSERT INTO organizations (org_name, org_location, img_url, about, instagram_url, facebook_url, twitter_url)
VALUES ('Highpoint Center for Printmaking', '912 W Lake St, Minneapolis, MN 55408', 'https://www.minnpost.com/wp-content/uploads/2020/10/FootDoor5_940.png?fit=940%2C432&strip=all', 'Highpoint Center for Printmaking was established in April 2001 and is the only accessible, community-oriented facility of its kind in the Upper Midwest. Until Highpoint opened its doors, broad public access to the printmaking arts was virtually non-existent in this part of the country. Having reached it’s capacity at its first location, in 2008 Highpoint launched HP2, a capital campaign, to raise funds to purchase and renovate a 10,000 sq. ft. building at 912 W. Lake Street, in South Minneapolis. Thanks to generous foundations and hundreds of individuals, HP2 was a great success. Highpoint’s future is now stable and secure in a permanent home, allowing HP to continue its significant contribution to the printmaking arts and our community’s cultural life. Co-founders Executive Director Carla McGrath and Artistic Director & Master Printer Cole Rogers have built Highpoint with established reputations in, and extensive knowledge of the arts, education and printmaking.','instagram.com/highpointprints','https://www.facebook.com/HighpointPrints/','https://twitter.com/HighpointPrints' );

CREATE TABLE "programs" (
    id SERIAL PRIMARY KEY,
    org_id INT,
    prog_name VARCHAR(100),
    prog_location VARCHAR(250),
    img_url VARCHAR(150),
    description VARCHAR(1000),
    fav BOOLEAN DEFAULT false,
    start_date DATE,
    end_date DATE,
    deadline DATE,
    app_url VARCHAR(150),
    funding BOOLEAN,
    funding_amount INT DEFAULT 0,
	"cost" BOOLEAN,
    cost_amount INT DEFAULT 0,
    housing VARCHAR(50) DEFAULT null,
    meals VARCHAR(50) DEFAULT null,
    accessibility VARCHAR(50) DEFAULT null,
    public_programs VARCHAR(50) DEFAULT null,
    discipline VARCHAR(50) DEFAULT null,
    facilities VARCHAR(50) DEFAULT null
);

INSERT INTO programs (prog_name, prog_location, img_url, description, start_date, end_date, deadline, app_url, funding)
VALUES ('Jerome Residency', '912 W Lake St, Minneapolis, MN 55408', 'https://images.squarespace-cdn.com/content/v1/5a00e675268b96458e137e2e/7c8131d3-df1c-46f6-a94f-2c4332e43035/51916336861_d93fc400f8_o.jpg?format=750w', 'Each year, three artists are selected to participate in the Jerome Early Career Printmakers Residency at Highpoint. Thanks to the genderous support of the Jerome Foundation, this program has existed since 2003 and has served more than 40 early career printmakers. The residency begins in September and ends with a culminating exhibition in May.', '09/1/2022', '05/31/2023', '07/18/2022', 'https://artist.callforentry.org/festivals_unique_info.php?ID=8753', true );

UPDATE "programs" SET org_id = 1 WHERE prog_name = 'Jerome Residency';

SELECT prog_name, org_name, deadline, prog_location
FROM programs
JOIN organizations on organizations.id = programs.org_id
GROUP BY programs.id, organizations.id;