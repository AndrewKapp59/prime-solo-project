
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    user_type VARCHAR (80),
    org_id INTEGER DEFAULT 0,
    prog_id INTEGER DEFAULT 0
);

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    user_type INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE fav_org (
    id SERIAL PRIMARY KEY,
    org_id INTEGER DEFAULT 0,
    user_id INTEGER DEFAULT 0
);

CREATE TABLE fav_prog (
    id SERIAL PRIMARY KEY,
    prog_name VARCHAR (500),
    user_id INTEGER DEFAULT 0
);

CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    org_user_id INTEGER DEFAULT 0,
    org_name VARCHAR(100),
    org_location VARCHAR(250),
    org_img_url VARCHAR(3000),
    about VARCHAR(3000),
    fav BOOLEAN DEFAULT false,
    instagram_url VARCHAR(150) DEFAULT null,
    facebook_url VARCHAR(150) DEFAULT null,
    twitter_url VARCHAR(150) DEFAULT null
);

CREATE TABLE "programs" (
    id SERIAL PRIMARY KEY,
    org_id INT,
    prog_name VARCHAR(1000),
    prog_location VARCHAR(1250),
    prog_img_url VARCHAR(1000),
    description VARCHAR(1000),
    fav BOOLEAN DEFAULT false,
    start_date DATE,
    end_date DATE,
    deadline DATE,
    app_url VARCHAR(1000),
    funding_amount INT DEFAULT 0,
    cost_amount INT DEFAULT 0,
    housing VARCHAR(1250) DEFAULT null,
    meals VARCHAR(1250) DEFAULT null,
    accessibility VARCHAR(1250) DEFAULT null,
    public_programs VARCHAR(1250) DEFAULT null,
    discipline VARCHAR(1250) DEFAULT null,
    facilities VARCHAR(1250) DEFAULT null
);


INSERT INTO organizations (org_user_id, org_name, org_location, org_img_url, about, instagram_url, facebook_url, twitter_url)
VALUES
(1,
'Highpoint Center for Printmaking',
'912 W Lake St, Minneapolis, MN 55408',
'https://www.minnpost.com/wp-content/uploads/2020/10/FootDoor5_940.png?fit=940%2C432&strip=all',
'Highpoint Center for Printmaking was established in April 2001 and is the only accessible, community-oriented facility of its kind in the Upper Midwest. Co-founders Executive Director Carla McGrath and Artistic Director & Master Printer Cole Rogers have established reputations in, and extensive knowledge of the arts, education and printmaking.',
'https://www.instagram.com/highpointprints',
'https://www.facebook.com/HighpointPrints/',
'https://twitter.com/HighpointPrints'
),
(3, 
'Textile Arts Center',
'505 Carroll St, Brooklyn, NY 11215',
'https://textileartscenter.com/wp-content/uploads/2020/04/36550502-5ea3-42f7-93d9-67e5efffcbe7_rw_3840-2.png',
'Textile Arts Center (TAC) is a NYC-based resource facility dedicated to raising awareness and understanding of textiles through creative educational programs for children and adults. At TAC, we unite and empower the textile community and advocate for the handmade by providing accessible, skills-based classes that reinvigorate engagement with traditional crafts. Techniques like weaving, sewing, and dyeing are practical, connective, and process-driven—common denominators around the world. They are part of our collective history and vital to our ongoing expressions of design, art, and culture.',
'https://www.instagram.com/textileartscenter/',
'https://www.facebook.com/textileartscenter/',
'https://twitter.com/textileartscent/');
(4, 
'Penington Friends House', 
'215 E 15th St, New York, NY 10003',
'https://cdn.architecturelab.net/wp-content/uploads/2016/05/The-Penington-Friends-House-776x570.jpg',
'The Penington Friends House was established by Quaker women and early Abolitionists to offer a home like place of shelter in New York City to a wide range of people. Today, we are a collaborative house open to all that is run on Quaker process and on the Quaker values of simplicity, peace, integrity, community, equality, and stewardship. We offer 23 long term residencies and 2 short stay guest rooms. The heart of our community are the chef prepared meals we serve to all residents and guests. We also strive to serve our community through offering our parlor as a meeting space and through programing that includes the year long Bayard Rustin residency for BIPOC artists and activists.', 'https://www.instagram.com/penington_friends_house/', 'None', 'None');


INSERT INTO programs (org_id, prog_name, prog_location, prog_img_url, description, start_date, end_date, deadline, app_url, funding_amount, cost_amount, housing, meals, public_programs, discipline, facilities)
VALUES 
(1, 
'Jerome Residency: 2021', 
'912 W Lake St, Minneapolis, MN 55408', 
'https://images.squarespace-cdn.com/content/v1/5a00e675268b96458e137e2e/7c8131d3-df1c-46f6-a94f-2c4332e43035/51916336861_d93fc400f8_o.jpg?format=750w', 
'Each year, three artists are selected to participate in the Jerome Early Career Printmakers Residency at Highpoint. Thanks to the generous support of the Jerome Foundation, this program has existed since 2003 and has served more than 40 early career printmakers. The residency begins in September and ends with a culminating exhibition in May.', 
'2022-09-01',
'2023-05-31',
'2022-07-18',
'https://www.highpointprintmaking.org/access/jerome-residency',
'1000',
'0',
'Kitchen, Lunchroom',
'No Meals',
'Community Engagement, Discussion, 24 hour Open Studio',
'Printmaking',
'Intaglio, Relief, Lithography, Screenprinting'
),
(
3,
'TAC AIR', 
'505 Carroll St, Brooklyn, NY 11215', 
'https://textileartscenter.com/wp-content/uploads/2022/02/274544170_1643375405994861_1159888356503859466_n.jpg', 
'TAC AIR combines studio access with a rigorous interdisciplinary curriculum, regular critical dialogue and mentorship, providing residents an opportunity to learn and explore the textile medium, and an alternative to traditional higher education programs. The residency culminates in a group exhibition produced and hosted by TAC. Since 2010, TAC AIR has graduated over eighty artists and designers whose work continues to further textile art within the fashion, fine arts, design and art education fields.', 
'2022-10-01',
'2023-06-30',
'2022-03-22',
'https://textileartscenter.com/feature/tac-artist-in-residence-cycle-14-open-call-is-live/',
'0',
'10000',
'No Housing',
'No Meals',
'Lectures, Critiques, Mentorships, Classes',
'Textiles',
'Weaving, Spinning, Machine Knitting, Natural Dyeing, Surface Design'
),
(4, 
'Bayard Rustin Residency', 
'215 E 15th St, New York, NY 10003', 
'https://www.nyclgbtsites.org/wp-content/uploads/2021/06/217MottStreet_003_Square-700x700-1.jpg', 
'This residency is open to Black Indigenous People of Color that are artists or activists and that have created a strong project to help end Racism ( or intersectional issues) in the United States of America. This residency is inspired by the Civil Rights Activists Bayard Rustin, a Quaker and openly gay man that advised Rev. Martin Luther King Jr. Like Rustin, we are looking for someone committed to making the world a better place by helping end racism through non-violent, effective, new, and inspiring means.', 
'9/30/2022',
'9/30/2023',
'3/31/2022',
'http://www.penington.org/residency/',
'0',
'18000',
'Private Room',
'Breakfast, Chef on Site, Coffee, Dinner, Lunch',
'Community Engagement , Exhibition, Forum, Readings, Round Tables, Self-Directed',
'Acting, Activists, Conceptual Art, Dance, Design, Digital Media, Documentary, Drawing, Film, Illustration, Immersive Experiences, Journalism, Literature, Screenwriting, Sculpture, Singing, Social Practice, Textile, Theatre, Video Art, Visual Arts',
'Open Studio'
);
