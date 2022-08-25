const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../../database/dbConfig.js');
const users = require('../../database/models/users-model.js');
const authHelper = require('../middleware/auth-helpers.js');

router.post('/register', async (req, res) => {
    const credentials = req.body;
    credentials.password = bcrypt.hashSync(credentials.password, 11);

    try {
        let insertUser = await users.insert(credentials);
        const token = authHelper.generateToken(credentials);
        insertUser = await db('users').where({username: insertUser.username}).select("id", "username", "email", "firstName");

        res.status(201).json({
            message: `Registration successful`,
            token,
            currentUser: insertUser,
        });

    } catch (err) {
        res.status(500).json({ message: `Unable to register` });
    }
});

router.post('/login', async (req, res) => {
    const credentials = req.body;

    try {
        let user = await db('users')
            .where({ username: credentials.username })
            .first();

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
            const token = authHelper.generateToken(user);

            user = await db('users')
                .where({ username: credentials.username })
                .first().select("id", "username", "email", "firstName");

            res.status(200).json({
                message: `Welcome back ${user.firstName}!`,
                token,
                currentUser: user
            });
        } else {
            res.status(401).json({ message: `Unauthorized credentials` });
        }
    } catch (err) {
        res.status(500).json({ message: `Unable to login` });
    }
});

module.exports = router;