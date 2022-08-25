const express = require( 'express' );
const server = express();
const helmet = require('helmet');
const cors = require('cors');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('*', cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

const users = require('./routes/users.js');
const auth = require('./routes/auth.js');
const lessons = require('./routes/lessons.js');

server.use('/api/users', users);
server.use('/api/auth', auth);
server.use('/api/lessons', lessons);


server.get('/api', (req, res) => {
    res.status(200).json({message: "API Running!"});
});

module.exports = server;

