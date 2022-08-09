exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('VideoGamesAPI').truncate()
  await knex('VideoGamesAPI').insert([
    {Game: 'God of War', Rating: 9, Platform: 'Playstation 4', Comment: 'Give me God of War!!!'},
    {Game: 'Uncharted 4', Rating: 8, Platform: 'Playstation 4', Comment: 'A true Masterpiece of intense adventure and story. I love the story so much!'},
    {Game: 'Infamous', Rating: 7, Platform: 'Playstation 3', Comment: 'I like the super powers'},
    {Game: 'Godfall', Rating: 3, Platform: 'Playstation 5', Comment: 'Absolutely Garbage, action is good but very very short lived along with an empty story'},
    {Game: 'Deathloop', Rating: 3, Platform: 'Playstation 5'}
  ]);
};
