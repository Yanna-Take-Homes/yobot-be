const db = require('../dbConfig.js');

const getAll = async () => {
    return db('users');
}

const getById = async (id) => {
    return db('users').where({ id: id }).first();
}

module.exports = {
    getAll, getById
};