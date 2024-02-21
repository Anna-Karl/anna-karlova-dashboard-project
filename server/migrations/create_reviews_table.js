/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('reviews', (table) => {
      table.increments('review_id').primary();
      table
        .integer('product_id')
        .unsigned()
        .references('products.product_id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('user_name').notNullable();
      table.timestamp('date').notNullable();
      table.integer('rating').notNullable();
      table.string('comment').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('reviews');
  };