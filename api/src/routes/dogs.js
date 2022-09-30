const { Router } = require("express")
const { getAllData, getByIdRaza, addNewBreed } = require("../controllers/dogs")

const server = Router()

//  GET /dogs
//  GET /dogs?name="..."
server.get("/", async (req, res, next) => {
	try {
		const { name } = req.query
		const dogsData = await getAllData(name)

		res.status(200).send(dogsData)
	} catch (error) {
		res.status(400).send({ error: error.message })
		//next(error)
	}
})

// GET /dogs/{idRaza}
server.get("/:idRaza", async (req, res) => {
	try {
		const { idRaza } = req.params
		const dogsData = await getByIdRaza(idRaza)
		res.status(200).send(dogsData)
	} catch (error) {
		res.status(400).send({ error: error.message })
	}
})

// POST /dogs
server.post("/", async (req, res) => {
	try {
		const response = await addNewBreed(req.body)
		console.log(response)
		res.status(200).send(response)
	} catch (error) {
		res.status(400).send({ error: error.message })
	}
})

module.exports = server
