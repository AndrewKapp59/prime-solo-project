const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Gets all the organizations from the data base. 
router.get('/', (req, res) => {
  const query = 
    `SELECT org_img_url, org_name, org_location
    FROM organizations
    GROUP BY org_img_url, org_name, org_location;`;
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

module.exports = router