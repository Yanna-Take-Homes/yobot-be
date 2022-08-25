/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('routes', table => {
        table.increments();
        table.integer('lesson_id').unsigned().references('id').inTable('lessons').onDelete('CASCADE');
        table.string('text', 255).notNullable().unique();
        table.string('replies', 255).notNullable();
        table.string('payloads', 255);
        table.string('tag', 255);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('routes');
};