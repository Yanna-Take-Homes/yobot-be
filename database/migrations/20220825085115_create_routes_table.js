/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('routes', table => {
        table.increments("id").primary();
        table.integer('lesson_id').notNullable().unsigned()
        table.foreign('lesson_id').references('lessons.id');
        table.string('lesson_name').notNullable().unsigned()
        table.foreign('lesson_name').references('lessons.name');
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