/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('lesson_routes').del()
  await knex('lesson_routes').insert([
    {
      id: 1,
      lesson_id: 1,
      route_id: 1,
    },
    {
      id: 2,
      lesson_id: 1,
      route_id: 2,
    },
    {
      id: 3,
      lesson_id: 1,
      route_id: 3,
    },
    {
      id: 4,
      lesson_id: 1,
      route_id: 4,
    },
    {
      id: 5,
      lesson_id: 1,
      route_id: 5,
    },
    {
      id: 6,
      lesson_id: 1,
      route_id: 6,
    },
    {
      id: 7,
      lesson_id: 1,
      route_id: 7,
    },
    {
      id: 8,
      lesson_id: 1,
      route_id: 8,
    },
    {
      id: 9,
      lesson_id: 1,
      route_id: 9,
    },
    {
      id: 10,
      lesson_id: 1,
      route_id: 10,
    },
    {
      id: 11,
      lesson_id: 1,
      route_id: 11,
    },
    {
      id: 12,
      lesson_id: 1,
      route_id: 12,
    },
    {
      id: 13,
      lesson_id: 1,
      route_id: 13,
    },
    {
      id: 14,
      lesson_id: 1,
      route_id: 14,
    },
    {
      id: 15,
      lesson_id: 1,
      route_id: 15,
    },
  ]);
};