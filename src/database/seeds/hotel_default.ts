import { Knex } from 'knex'

export async function seed(knex: Knex) {
  await knex('hotel').insert([
    { descricao: "Dan Inn Franca", endereco: "Rua A", codigo_cidade: 1 },
    { descricao: "Imperador Palace", endereco: "Rua B", codigo_cidade: 1 },
    { descricao: "Ibis Styles", endereco: "Rua C", codigo_cidade: 1 },

    { descricao: "Beaver Ridge", endereco: "Rua D", codigo_cidade: 2 },
    { descricao: "Bluenose Hills", endereco: "Rua E", codigo_cidade: 2 },
    { descricao: "Casa longe de casa", endereco: "Rua F", codigo_cidade: 2 },

    { descricao: "Lar Doce Casa Temporária", endereco: "Rua G", codigo_cidade: 3 },
    { descricao: "Keronics Logo", endereco: "Rua H", codigo_cidade: 3 },
    { descricao: "Juniper Log Inn", endereco: "Rua I", codigo_cidade: 3 },
  ])
}