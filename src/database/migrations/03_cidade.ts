import knex, { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cidade', table => {
    table.increments('codigo').primary();
    table.string('descricao').notNullable().unique();
    table.integer('codigo_pais').notNullable()
      .references('codigo').inTable('pais');
  });
} 

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cidade');
}