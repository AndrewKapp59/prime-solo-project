const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Gets all the programs from the data base.
router.get('/', (req, res) => {
  const query = 
    `SELECT *
    FROM programs
    JOIN organizations on organizations.org_user_id = programs.org_id
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
  const name = req.params.name;
  console.log('Program id', req.params.name);

  const query = 
    `SELECT *
    FROM programs
    JOIN organizations on organizations.org_user_id = programs.org_id
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

router.delete('/:name', (req, res) => {
  let name = req.params.name;

  let queryText = `DELETE FROM "programs" WHERE "prog_name" = $1;`;

  pool
    .query(queryText, [name])
    .then((result) => {
      console.log('Org project Delete successful');

      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Org project Delete error', error);

      res.sendStatus(500);
    });
});

router.put('/edit/:name', (req, res) => {
  console.log(req.body);
  const name = req.params.name;
  const prog_name = req.body.prog_name;
  const prog_location = req.body.prog_location;
  const prog_img_url = req.body.prog_img_url;
  const description = req.body.description;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const deadline = req.body.deadline;
  const app_url = req.body.app_url;
  const funding_amount = req.body.funding_amount;
  const cost_amount = req.body.cost_amount;
  const housing = req.body.housing;
  const meals = req.body.meals;
  const accessibility = req.body.accessibility;
  const public_programs = req.body.public_programs;
  const discipline = req.body.discipline;
  const facilities = req.body.facilities;

  const query = `
  UPDATE programs 
  SET prog_name = $1,
  prog_location = $2,
  prog_img_url = $3,
  description = $4,
  start_date = $5,
  end_date = $6,
  deadline = $7,
  app_url = $8,
  funding_amount = $9,
  cost_amount = $10,
  housing = $11,
  meals = $12,
  accessibility = $13,
  public_programs = $14,
  discipline = $15,
  facilities = $16
  WHERE prog_name = $17;
  `;
  pool
    .query(query, [
      prog_name,
      prog_location,
      prog_img_url,
      description,
      start_date,
      end_date,
      deadline,
      app_url,
      funding_amount,
      cost_amount,
      housing,
      meals,
      accessibility,
      public_programs,
      discipline,
      facilities,
      name,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post('/new', (req, res) => {
  let newProg = req.body;
  console.log(req.body);

  let queryText = `
    INSERT INTO programs ("org_id", "prog_name", "prog_location", "prog_img_url", "description", "start_date", "end_date", "deadline", "app_url", "funding_amount", "cost_amount", "housing", "meals", "accessibility", "public_programs", "discipline", "facilities")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17);  
  `;
  const values = [
    newProg.org_id,
    newProg.prog_name,
    newProg.prog_location,
    newProg.prog_img_url,
    newProg.description,
    newProg.start_date,
    newProg.end_date,
    newProg.deadline,
    newProg.app_url,
    newProg.funding_amount,
    newProg.cost_amount,
    newProg.housing,
    newProg.meals,
    newProg.accessibility,
    newProg.public_programs,
    newProg.discipline,
    newProg.facilities,
  ];
  pool
    .query(queryText, values)
    .then((result) => {
      console.log('New program posted', result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error with new program post', error);
      res.sendStatus(500);
    });
});

router.get('/org/:id', (req, res) => {
  const id = req.params.id;
  console.log('Org id', req.params.id);

  const query = 
    `SELECT 
    STRING_AGG (housing, ', ') as housing, 
    STRING_AGG (public_programs, ', ') as public_programs, 
    STRING_AGG (facilities, ', ') as facilities, 
    STRING_AGG (discipline, ', ') as discipline
    FROM programs
    WHERE org_id = $1;`;
  pool
    .query(query, [id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Getting org program details', err);
      res.sendStatus(500);
    });
});


module.exports = router;
