const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../../database/dbConfig.js');
const users = require('../../database/models/users-model.js');
const authHelper = require('../middleware/auth-helpers.js');

router.post('/register', async (req, res) => {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password, 11);
    const token = authHelper.generateToken(newUser);
    await users.insert(newUser).then( async () => {
        const user = await db('users').where({ username: newUser.username }).first();
        res.status(201).json({
            message: 'User created successfully!',
            token,
            user
        });
    }).catch(err => {
        res.status(500).json({
            message: 'Error creating user',
            err
        });
    });
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
                .first().select("id", "username", "email", "firstName", "last_route_id");

            res.status(200).json({
                message: `Welcome back ${user.firstName}!`,
                token,
                user
            });
        } else {
            res.status(401).json({ message: `Unauthorized credentials` });
        }
    } catch (err) {
        res.status(500).json({ message: `Unable to login` });
    }
});

module.exports = router;