const express = require('express');
const users = require('../../database/models/users-model.js');
const authHelper = require('../middleware/auth-helpers.js');
const router = express.Router();

router.get('/', (req, res) => {
    users.getAll()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve users.'})
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params || req.body;
    users.getById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(() => {
            res.status(500).json({error: 'could not retrieve user.'})
        })
});

module.exports = router;