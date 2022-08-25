const db = require('../dbConfig.js');

const getAllByUserId = async (user_id) => {
    return db('user_lessons').where({user_id: user_id});
}

module.exports = {
    getAllByUserId
};