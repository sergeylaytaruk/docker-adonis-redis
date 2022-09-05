'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up() {
    this.create('posts', table => {
      table.increments()
      table.string('title', 255).notNullable()
      table.text('body').notNullable()
      table.string('img', 255)
      table.integer('user_id').unsigned().notNullable()

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')

      table.timestamps()
    })
  }

  down() {
    this.drop('posts')
  }
}

module.exports = PostsSchema
