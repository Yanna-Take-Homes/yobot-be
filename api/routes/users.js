const express = require('express');
const users = require('../../database/models/users-model.js');
const authHelper = require('../middleware/auth-helpers.js');
const router = express.Router();

router.get('/', authHelper.protected, (req, res) => {
    users.getAll()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(() => {
        res.status(500).json({error: 'could not retrieve users.'})
    })
});

module.exports = router;