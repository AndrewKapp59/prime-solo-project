const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Gets all the organizations from the data base. 
router.get('/', (req, res) => {
  const query = 
    `SELECT *
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
  const id = req.params.id
  console.log('Organization id', req.params.id);
  
  const query = 
    `SELECT *
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
  const id = req.params.id
  console.log('User id', req.params.id);
  
  const query = 
    `SELECT *
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

module.exports = router