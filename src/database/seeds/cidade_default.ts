import { Knex } from 'knex'

export async function seed(knex: Knex) {
  await knex('cidade').insert([
    { descricao: "Paris", codigo_pais: 1 },
    { descricao: "Estrasburgo", codigo_pais: 1 },
    { descricao: "Lyon", codigo_pais: 1 },
  ])
}