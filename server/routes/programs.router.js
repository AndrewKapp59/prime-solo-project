const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Gets all the programs from the data base. 
router.get('/', (req, res) => {
  const query = 
    `SELECT prog_img_url, prog_name, org_name, deadline, prog_location
    FROM programs
    JOIN organizations on organizations.id = programs.org_id
    GROUP BY programs.id, organizations.id;`;
  pool
    .query(query)
    .then((result) => {
      console.log(result.rows);
      
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all programs', err);
      res.sendStatus(500);
    });
});

module.exports = router