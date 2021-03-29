import { Knex } from 'knex'

export async function seed(knex: Knex) {
  await knex('quarto').insert([
    { descricao: "Quarto 1", valor: 100, codigo_hotel: 1 },
    { descricao: "Quarto 2", valor: 90, codigo_hotel: 1 },
    
    { descricao: "Quarto 1", valor: 100, codigo_hotel: 2 },
    { descricao: "Quarto 2", valor: 90, codigo_hotel: 2 },

    { descricao: "Quarto 1", valor: 100, codigo_hotel: 3 },
    { descricao: "Quarto 2", valor: 90, codigo_hotel: 3 },

    { descricao: "Quarto 1", valor: 100, codigo_hotel: 4 },
    { descricao: "Quarto 2", valor: 90, codigo_hotel: 4 },

    { descricao: "Quarto 1", valor: 100, codigo_hotel: 5 },
    { descricao: "Quarto 2", valor: 90, codigo_hotel: 5 },

    { descricao: "Quarto 1", valor: 100, codigo_hotel: 6 },
    { descricao: "Quarto 2", valor: 90, codigo_hotel: 6 },

    { descricao: "Quarto 1", valor: 100, codigo_hotel: 7 },
    { descricao: "Quarto 2", valor: 90, codigo_hotel: 7 },

    { descricao: "Quarto 1", valor: 100, codigo_hotel: 8 },
    { descricao: "Quarto 2", valor: 90, codigo_hotel: 8 },

    { descricao: "Quarto 1", valor: 100, codigo_hotel: 9 },
    { descricao: "Quarto 2", valor: 90, codigo_hotel: 9 },
  ])
}