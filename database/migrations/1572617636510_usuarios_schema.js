'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariosSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('data_situacao', 254).notNullable().unique()
      table.string('tipo', 254).notNullable().unique()
      table.string('nome', 254).notNullable().unique()
      table.string('telefone', 254).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('situacao', 254).notNullable().unique()
      table.string('municipio', 254).notNullable().unique()
      table.string('fantasia', 254).notNullable().unique()
      table.string('cnpj', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuariosSchema
