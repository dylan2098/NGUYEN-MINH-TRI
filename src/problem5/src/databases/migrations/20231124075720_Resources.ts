import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Resources', (table) => {
    table.increments('resource_id');
    table.string('resource_name', 255).notNullable();
    table.string('resource_desc', 255);
    table.integer('resource_score');
    table.smallint('resource_status').defaultTo(0);
    table.datetime('resource_created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime('resource_updated_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.index(
      ['resource_name']
    );
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('Resources');
}
