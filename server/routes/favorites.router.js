const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// add a favorite organization
router.post('/', (req, res) => {
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
      console.log("Error with organization post", error);
      res.sendStatus(500)
    })
});

// delete a favorite organization
router.delete('/:id', (req, res) => {
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

router.get('/', (req, res) => {
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
      console.log('ERROR: Getting organization details', err);
      res.sendStatus(500);
    });
});

module.exports = router;