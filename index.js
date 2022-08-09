const express = require('express')
const gameModel = require('./videoGameServer/model')
const gameMiddleware = require('./videoGameServer/middleware')

const server = express()
const PORT = process.env.PORT || 9000

server.use(express.json())

// server.use('/api/server', server)

server.get('/', (req, res) => {
    res.send('Welcome to My Video Game Server!')
})


// Retrieves all Games
server.get('/games', (req, res) => {
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
server.get('/:id', gameMiddleware.gameIdChecker, (req, res) => {
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
server.post('/', gameMiddleware.gameBodyChecker, (req, res) => {
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
server.put('/:id', gameMiddleware.gameIdChecker, gameMiddleware.gameBodyChecker2, (req, res) => {
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
server.delete('/:id', gameMiddleware.gameIdChecker, (req, res) => {
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

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'There was an error performing the operation' })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})