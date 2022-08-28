/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('lessons').del()
  await knex('lessons').insert([
    {name: 'labels'},
    {name: 'feelings'},
  ]);
};
