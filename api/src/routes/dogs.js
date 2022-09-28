const { Router } = require('express')
const { getAllData } = require('../controllers/dogs')

const server = Router()

server.get('/', async (req, res, next) => {
    try {
        const dogsData = await getAllData()
        res.send(dogsData)

    } catch (error) {
        next(error)
    }
})

module.exports = server