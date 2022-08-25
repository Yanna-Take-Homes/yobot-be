/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('lesson_routes', table => {
        table.increments("id").primary();
        table.integer('lesson_id').notNullable().unsigned()
        table.foreign('lesson_id').references('lessons.id');
        table.integer('route_id').notNullable().unsigned()
        table.foreign('route_id').references('routes.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('lesson_routes');
};