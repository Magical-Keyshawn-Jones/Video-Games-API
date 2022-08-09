const db = require('../database/db-config')

function getAll() {
    return db('VideoGamesAPI')   
}

function getById(id) {
    // Select * From VideoGamesAPI Where 'id' = id limit 1
    return db('VideoGamesAPI').where('id', id).first()
}

async function create(game) {
    // Insert Into VideoGamesAPI 
    //  (Game, Rating, Platform, Comment)
    // Values
    //  (GameFunction('Kratos', 10, 'Console', 'Hes great'))
    
    const [id] = await db('VideoGamesAPI').insert(game)
    return getById(id)
}

function update(id, changes) {
    // Update VideoGamesAPI set Game = 'Fabulous' Where id = id(39)
    return db('VideoGamesAPI').where('id', id).update(changes)
    .then((count) => (count > 0 ? getById(id) : null))
}

function remove(id) {
    // Delete from VideoGamesAPI Where id = id(5)
    return db('videoGames').where('id',id).del()
    .then(results => {
        return { message: `Successfully Delete Post with id: ${id}`}
    })
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}