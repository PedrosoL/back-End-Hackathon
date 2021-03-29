import knex, { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('quarto', table => {
        table.increments('codigo').primary();
        table.string('descricao').notNullable();
        table.decimal('valor').notNullable();
        table.integer('codigo_hotel').notNullable()
            .references('codigo').inTable('hotel');
    });
} 

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('quarto');
}