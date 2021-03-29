import knex, { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('hotel_imagens', table => {
        table.increments('codigo').primary();
        table.string('link');
        table.integer('codigo_hotel').notNullable()
            .references('codigo').inTable('hotel');
    });
} 

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('hotel_imagens');
}