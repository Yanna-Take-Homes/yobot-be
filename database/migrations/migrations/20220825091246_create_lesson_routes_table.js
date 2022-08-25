/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('lesson_routes', table => {
        table.increments();
        table.integer('lesson_id').unsigned().references('id').inTable('lessons').onDelete('CASCADE');
        table.integer('route_id').unsigned().references('id').inTable('routes').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('lesson_routes');
};