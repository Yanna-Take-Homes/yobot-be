/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('lessons').del()
  await knex('lessons').insert([
    {id: 1, name: 'labels'},
    {id: 2, name: 'feelings'},
  ]);
};
