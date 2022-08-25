const express = require('express');
const routes = require('../../database/models/routes-model.js');
const authHelper = require('../middleware/auth-helpers.js');
const router = express.Router();

router.get('/', (req, res) => {
    routes.getAll()
        .then(routes => {
            res.status(200).json(routes);
        })
        .catch(() => {
            res.status(500).json({error: 'could not retrieve routes.'});
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params || req.body
    routes.getById(id)
        .then(routes => {
            res.status(200).json(routes);
        })
        .catch(() => {
            res.status(500).json({error: 'could not retrieve route.'});
        })
});

router.get('/for-lesson/:lesson_id', (req, res) => {
    const { lesson_id } = req.params || req.body
    routes.getAllByLessonId(lesson_id)
        .then(routes => {
            res.status(200).json(routes);
        })
        .catch(() => {
            res.status(500).json({error: 'could not retrieve routes for lesson.'});
        })
});

module.exports = router;
