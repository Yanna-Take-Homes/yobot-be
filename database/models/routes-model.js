const db = require('../dbConfig.js');

const getAll = async () => {
    return db('routes');
}
const getById = async (id) => {
    return db('routes').where({ id: id }).first();
}
const getAllByLessonId = async (lesson_id) => {
    return db('routes').where({ lesson_id: lesson_id });
}

module.exports = {
    getAll, getById, getAllByLessonId
};