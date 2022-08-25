const express = require('express');
const userLessons = require('../../database/models/user-lessons-model.js');
const authHelper = require('../middleware/auth-helpers.js');
const router = express.Router();

router.get('/:user_id', (req, res) => {
    const { user_id } = req.params || req.body;
    userLessons.getAllByUserId(user_id)
        .then(lessons => {
            res.status(200).json(lessons);
        })
        .catch(() => {
            res.status(500).json({error: 'could not retrieve user\'s lessons.'});
        });
});

module.exports = router;