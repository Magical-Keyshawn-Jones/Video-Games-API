const express = require('express')
const videoGames = require('./videoGameServer/route')

const server = express()
const PORT = process.env.PORT || 9000

server.use(express.json())

server.use('/api/videoGames', videoGames)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'There was an error performing the operation' })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})