const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Gets all the organizations from the data base.
router.get('/', (req, res) => {
  const query = `SELECT *
    FROM organizations
    JOIN programs on programs.org_id = organizations.id 
    GROUP BY programs.id, organizations.id;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting all organizations', err);
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log('Organization id', req.params.id);

  const query = `SELECT *
    FROM organizations
    JOIN programs on programs.org_id = organizations.id 
    WHERE org_id = $1
    GROUP BY programs.id, organizations.id;`;
  pool
    .query(query, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting organization details', err);
      res.sendStatus(500);
    });
});

router.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log('User id', req.params.id);

  const query = `SELECT *
    FROM organizations
    JOIN programs on programs.org_id = organizations.id 
    WHERE org_user_id = $1
    GROUP BY programs.id, organizations.id;`;
  pool
    .query(query, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting organization details', err);
      res.sendStatus(500);
    });
});

router.put('/edit/:id', (req, res) => {
  const id = req.params.id;
  const org_name = req.body.org_name;
  const org_location = req.body.org_location;
  const org_img_url = req.body.org_img_url;
  const about = req.body.about;
  const query = `
  UPDATE organizations 
  SET org_name = $1,
  org_location = $2,
  org_img_url = $3,
  about = $4
  WHERE org_user_id = $5;
  `;
  pool
    .query(query, [org_name, org_location, org_img_url, about, id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

router.post('/new', (req, res) => {
  let newOrg = req.body;
  console.log(req.body);

  let queryText = `
    INSERT INTO organizations ("org_user_id", "org_name", "org_location", "org_img_url", "about", "instagram_url", "facebook_url", "twitter_url")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);  
  `;
  const values = [
    newOrg.org_user_id,
    newOrg.org_name,
    newOrg.org_location,
    newOrg.org_img_url,
    newOrg.about,
    newOrg.instagram_url,
    newOrg.facebook_url,
    newOrg.twitter_url,
  ];
  pool
    .query(queryText, values)
    .then((result) => {
      console.log('New organization posted', result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error with new organization post', error);
      res.sendStatus(500);
    });
});

module.exports = router;
