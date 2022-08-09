const db = require('../database/db-config')

function getAll() {
    return db('VideoGames')   
}

function getById(id) {
    // Select * From VideoGames Where 'id' = id limit 1
    return db('VideoGames').where('id', id).first()
}

async function create(game) {
    // Insert Into VideoGames 
    //  (Game, Rating, Platform, Comment)
    // Values
    //  (GameFunction('Kratos', 10, 'Console', 'Hes great'))
    
    const [id] = await db('VideoGames').insert(game)
    return getById(id)
}

function update(id, changes) {
    // Update VideoGames set Game = 'Fabulous' Where id = id(39)
    return db('VideoGames').where('id', id).update(changes)
    .then((count) => (count > 0 ? getById(id) : null))
}

function remove(id) {
    // Delete from VideoGames Where id = id(5)
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