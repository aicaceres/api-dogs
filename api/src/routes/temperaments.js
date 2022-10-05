const { Router } = require("express")
const { getTemperamentData } = require("../controllers/temperaments")

const server = Router()

// GET /temperaments
server.get("/", async (req, res, next) => {
	try {
		const temperamentData = await getTemperamentData()
		res.send(temperamentData)
	} catch (error) {
		//next(error)
        
	}
})

module.exports = server
