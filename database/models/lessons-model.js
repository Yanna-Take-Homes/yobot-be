const db = require('../dbConfig.js');

const getAll = async () => {
    return db('lessons');
}

const getById = async (id) => {
    return db('lessons').where({id: id}).first();
}

module.exports = {
    getAll, getById
};