/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user_lessons', table => {
        table.increments("id").primary();
        table.integer('lesson_id').notNullable().unsigned()
        table.foreign('lesson_id').references('lessons.id');
        table.string('lesson_name').notNullable().unsigned()
        table.foreign('lesson_name').references('lessons.name');
        table.integer('user_id').notNullable().unsigned()
        table.foreign('user_id').references('users.id');
        table.boolean('completed').notNullable().defaultTo('false');
        table.string('feedback');
        table.integer('rating');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_lessons');
};