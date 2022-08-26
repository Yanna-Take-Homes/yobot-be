const db = require('../dbConfig.js');

const getAll = async () => {
    return db('users');
}

const getById = async (id) => {
    return db('users').where({ id: id }).first();
}

const insert = async (user) => {
    await db('users').insert({...user});
}

module.exports = {
    getAll, getById, insert
};