const express = require( 'express' );
const server = express();
const helmet = require('helmet');
const cors = require('cors');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('*', cors({
    origin: ['http://localhost:3000','https://yobot.netlify.app/'],
    credentials: true,
}));

const auth = require('./routes/auth.js');
const users = require('./routes/users.js');
const lessons = require('./routes/lessons.js');
const routes = require('./routes/routes.js');
const userLessons = require('./routes/user-lessons.js');

server.use('/api/users', users);
server.use('/api/auth', auth);
server.use('/api/lessons', lessons);
server.use('/api/routes', routes);
server.use('/api/user-lessons', userLessons);

server.get('/api', (req, res) => {
    res.status(200).json({message: "API Running!"});
});

module.exports = server;

