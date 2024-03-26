const express = require('express'); // import express
const router = express.Router(); // create express router
const Job = require('../models/Job'); // import Job model

    // add job
router.post('/add', (req, res) => {
    let { title, description, salary, company, email, new_job } = req.body;

    // insert data
    Job.create({ title, description, salary, company, email, new_job }).then(() => {
        res.redirect('/')
    }).catch(err => {
        console.log(err)
    })
});

module.exports = router