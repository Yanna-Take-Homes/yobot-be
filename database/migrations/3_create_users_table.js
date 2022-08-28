/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments("id").primary();
        table.string('username', 255).notNullable().unique();
        table.string('firstName', 255).notNullable();
        table.string('email', 255).notNullable().unique();
        table.string('password', 255).notNullable();
        table.integer('last_route_id').notNullable().unsigned().defaultTo(1);
        table.foreign('last_route_id').references('routes.id');
        table.integer('last_lesson_id').notNullable().unsigned().defaultTo(1);
        table.foreign('last_lesson_id').references('lessons.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};