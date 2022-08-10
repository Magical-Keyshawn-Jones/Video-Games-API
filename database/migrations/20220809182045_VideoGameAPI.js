exports.up = function(knex) {
    return knex.schema.createTable('VideoGamesAPI', table => {
        table.increments()
        table.varchar('Game').notNullable().default('God of War')
        table.integer('Rating').notNullable().default(10)
        table.text('Platform', 20).notNullable().default('Playstation 5')
        table.varchar('Comment', 150)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('VideoGamesAPI')
};
