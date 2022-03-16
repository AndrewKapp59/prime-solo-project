const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Gets all the programs from the data base. 
router.get('/', (req, res) => {
  const query = 
    `SELECT *
    FROM programs
    JOIN organizations on organizations.id = programs.org_id
    GROUP BY programs.id, organizations.id;`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting all programs', err);
      res.sendStatus(500);
    });
});

router.get('/:name', (req, res) => {
  const name = req.params.name
  console.log('Program id', req.params.name);
  
  const query = 
    `SELECT *
    FROM programs
    JOIN organizations on organizations.id = programs.org_id
    WHERE prog_name = $1
    GROUP BY programs.id, organizations.id;`;
  pool
    .query(query, [name])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting program details', err);
      res.sendStatus(500);
    });
});


module.exports = router