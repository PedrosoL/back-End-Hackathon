import { Knex } from 'knex'

export async function seed(knex: Knex) {
  await knex('pais').insert([
    { descricao: "França" },
    { descricao: "Brasil" },
    { descricao: "Dubai" },
  ])
}