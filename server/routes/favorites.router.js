const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// add a favorite organization
router.post('/org', (req, res) => {
  let fav = req.body
  console.log(req.body);
  
  let queryText = `
    INSERT INTO "fav_org" ("org_id", "user_id")
    VALUES ($1, $2);  
  `;
  const values = [fav.org_id, fav.user_id];
  pool.query(queryText, values)
    .then((result) => {
      console.log("Fav organization posted", result);
      res.sendStatus(201)
    }).catch((error) => {
      console.log("Error with fav organization post", error);
      res.sendStatus(500)
    })
});

// delete a favorite organization
router.delete('/org/:id', (req, res) => {
  let org_id = req.params.id;
  let user_id = req.user.id
  console.log(user_id);
  
  let queryText = `DELETE FROM "fav_org" WHERE "org_id" = $1 AND "user_id" = $2;`

  pool.query(queryText, [org_id, user_id])
    .then((result) => {
      console.log('Fav org Delete successful');

      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Fav org Delete error', error);

      res.sendStatus(500);
    })

});

// gets all the current users favorite organizations
router.get('/org', (req, res) => {
  let user_id = req.user.id
  console.log('Organization id', req.params.id);
  
  const query = 
    `SELECT *
    FROM fav_org
    JOIN organizations ON fav_org.org_id = organizations.id 
    WHERE user_id = $1
    GROUP BY fav_org.id, organizations.id;`;
  pool
    .query(query, [user_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting fav organizations', err);
      res.sendStatus(500);
    });
});

// add a favorite programs
router.post('/prog', (req, res) => {
  let fav = req.body
  console.log(req.body);
  
  let query = 
    `INSERT INTO "fav_prog" ("prog_name", "user_id")
    VALUES ($1, $2);`;

  pool.query(query, [fav.prog_name, fav.user_id])
    .then((result) => {
      console.log("Fav program posted", result);
      res.sendStatus(201)
    }).catch((error) => {
      console.log("Error with fav program post", error);
      res.sendStatus(500)
    })
});

// delete a favorite program
router.delete('/prog/:name', (req, res) => {
  console.log('req.params', req.params);
  
  let prog_name = req.params.name
  let user_id = req.user.id
  
  let queryText = `DELETE FROM "fav_prog" WHERE "prog_name" = $1 AND "user_id" = $2;`

  pool.query(queryText, [prog_name, user_id])
    .then((result) => {
      console.log('Fav prog Delete successful');

      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Fav prog Delete error', error);

      res.sendStatus(500);
    })

});

// gets all the current users favorite programs
router.get('/prog', (req, res) => {
  let user_id = req.user.id
  console.log('Program id', req.params.id);
  
  const query = 
    `SELECT *
    FROM fav_prog
    JOIN programs ON fav_prog.prog_name = programs.prog_name 
    JOIN organizations ON programs.org_id = organizations.org_user_id
    WHERE user_id = $1
    GROUP BY fav_prog.id, programs.id, organizations.id;`;
  pool
    .query(query, [user_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting fav programs', err);
      res.sendStatus(500);
    });
});

module.exports = router;