const gameModel = require('./model')

async function gameIdChecker (req, res, next) {
    const { id } = req.params
    const game = await gameModel.getById(id)

    if (!game) {return res.status(404).json({ message: 'Game with that Id does not exist' })}

    next()
}

function gameBodyChecker (req, res, next) {
    const { game, rating, platform } = req.body 

    if (game === undefined && rating === undefined && platform === undefined){
        return res.status(400).json({ message: 'game, rating, and platform is required' })
    } else if (game === undefined && rating === undefined) {
        return res.status(400).json({ message: 'game and rating is required' })
    } else if (game === undefined && platform === undefined) {
        return res.status(400).json({ message: 'game and platform is required' })
    } else if (rating === undefined && platform === undefined) {
        return res.status(400).json({ message: 'rating and platform is required' })
    } else if (game === undefined) {
        return res.status(400).json({ message: 'game is required' })
    } else if (rating === undefined) {
        return res.status(400).json({ message: 'rating is required' })
    } else if (platform === undefined) {
        return res.status(400).json({ message: 'platform is required' })
    } else {
        next()
    }
}

function gameBodyChecker2 (req, res, next) {
    const { game, rating, platform } = req.body 

    if (game === undefined && rating === undefined && platform === undefined){
        return res.status(400).json({ message: 'game, rating, platform, or comment is required' })
    } else {
        next()
    }
}

module.exports = {
    gameIdChecker,
    gameBodyChecker,
    gameBodyChecker2
}