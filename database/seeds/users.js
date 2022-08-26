/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      firstName: 'John',
      email: 'John@yo.com',
      username: 'JohnnyAppleseed',
      password: 'test',
      last_route_id: 1
    },
  ]);
};
