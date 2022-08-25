const db = require('../dbConfig.js');

const getAll = async () => {
    return db('users');
}

const getById = async (id) => {
    return db('users').where({ id: id }).first();
}

const insert = (user) => {
    return db('users').insert(user).return(user);
}

module.exports = {
    getAll, getById, insert
};