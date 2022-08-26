const express = require('express');
const lessons = require('../../database/models/lessons-model.js');
const authHelper = require('../middleware/auth-helpers.js');
const router = express.Router();

router.get('/', authHelper.protected, (req, res) => {
    lessons.getAll()
    .then(lessons => {
        res.status(200).json(lessons);
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve lessons.'});
    });
});

router.get('/:id', authHelper.protected, (req, res) => {
    const { id } = req.params || req.body
    lessons.getById(id)
    .then(lesson => {
        res.status(200).json(lesson);
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve lesson.'});
    })
});

module.exports = router;
