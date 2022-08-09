const gameModel = require('./model')
const gameMiddleware = require('./middleware')
const videoGames = require('express').Router()

// Retrieves all Games
videoGames.get('/', (req, res) => {
    gameModel.getAll()
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not retrieve Video Games' })
    })
})

// Retrieves Game with that id
videoGames.get('/:id', gameMiddleware.gameIdChecker, (req, res) => {
    const { id } = req.params

    gameModel.getById(id)
    .then(results => {
            res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not retrieve Game with that id' })
    })
})

// Post new Game
videoGames.post('/', gameMiddleware.gameBodyChecker, (req, res) => {
    const { body } = req

    gameModel.create(body)
    .then(results => {
        res.status(201).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could create game post' })
    })
})

// Change Game with that id
videoGames.put('/:id', gameMiddleware.gameIdChecker, gameMiddleware.gameBodyChecker2, (req, res) => {
    const { id } = req.params
    const { body } = req

    gameModel.update(id, body)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not update Game with that id' })
    })
})

// Deletes Game with that Id 
videoGames.delete('/:id', gameMiddleware.gameIdChecker, (req, res) => {
    const { id } = req.params

    gameModel.remove(id)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Could not delete game with that id'})
    })
})

module.exports = videoGames