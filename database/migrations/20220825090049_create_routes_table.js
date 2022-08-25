/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('routes', table => {
        table.increments("id");
        table.integer('lesson').unsigned().references('id').inTable('lessons').onDelete('CASCADE').notNullable()
        table.string('text', 255).notNullable();
        table.string('replies', 255);
        table.string('payloads', 255);
        table.string('routes', 255);
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