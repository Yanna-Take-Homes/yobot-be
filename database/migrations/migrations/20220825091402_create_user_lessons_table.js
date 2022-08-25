/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user_lessons', table => {
        table.integer('lesson_id').unsigned().references('id').inTable('routes').onDelete('CASCADE');
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
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
