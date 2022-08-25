const db = require('../dbConfig.js');

const getAll = async () => {
    return db('routes');
}
const getById = async (id) => {
    return db('routes').where({ id: id }).first();
}

module.exports = {
    getAll, getById
};