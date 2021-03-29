import { Knex } from 'knex'

export async function seed(knex: Knex) {
  await knex('hotel_imagens').insert([
    { link: "", codigo_hotel: 1 },
    { link: "", codigo_hotel: 2 },
    { link: "", codigo_hotel: 3 },
    { link: "", codigo_hotel: 4 },
    { link: "", codigo_hotel: 5 },
    { link: "", codigo_hotel: 6 },
    { link: "", codigo_hotel: 7 },
    { link: "", codigo_hotel: 8 },
    { link: "", codigo_hotel: 9 },
  ])
}