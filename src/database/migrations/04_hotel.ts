import knex, { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('hotel', table => {
    table.increments('codigo').primary();
    table.string('descricao').notNullable().unique();
    table.string('endereco').notNullable().unique();
    table.integer('codigo_cidade').notNullable()
      .references('codigo').inTable('cidade');
  });
} 

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('hotel');
}