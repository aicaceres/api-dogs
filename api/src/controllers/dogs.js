const axios = require("axios")
require("dotenv").config()
const { URL_API, URL_PHOTO_API } = process.env

const { Dog, Temperament } = require("../db")

// Get data from the API
const getApiData = async () => {
	try {
		const { data } = await axios.get(URL_API)

		return await data.map((d) => {
			let [weightMin, weightMax] = d.weight.metric.split("-")
			let [heightMin, heightMax] = d.height.metric.split("-")
			let temperament = d.hasOwnProperty("temperament")
				? d.temperament.split(/\s*(?:,|$)\s*/)
				: ""
			result = {
				id: d.id,
				name: d.name,
				weightMin: Number(weightMin),
				weightMax: Number(weightMax),
				heightMin: Number(heightMin),
				heightMax: Number(heightMax),
				temperament: temperament,
				lifeSpan: d.life_span,
				bredFor: d.bred_for,
				image: d.image.url,
				source: "API",
			}
			return result
		})
	} catch (error) {
		console.error("getApiData: ", error)
		return error
	}
}

// Get Data from database
const getDbData = async () => {
	try {
		const dogs = await Dog.findAll({
			include: {
				model: Temperament,
				through: {
					attributes: [],
				},
			},
		})

		if (dogs.length) {
			// format record like API
			const dbData = await dogs.map((d) => {
				const tempArray = d.temperaments.map((t) => t.name)
				field = d.dataValues
				data = {
					id: field.id,
					name: field.name,
					weightMin: field.weightMin,
					weightMax: field.weightMax,
					heightMin: field.heightMin,
					heightMax: field.heightMax,
					temperament: tempArray,
					lifeSpan: field.lifeSpan,
					bredFor: field.bredFor,
					image: field.image,
					source: "DB",
				}
				return data
			})
			return dbData
		} else {
			return []
		}
	} catch (error) {
		console.error("getDbData: ", error)
		return error
	}
}

// Join all the data
const getAllData = async (name) => {
	const api = await getApiData()
	const db = await getDbData()

	const all = [...api, ...db]
	// sort by default alphabetic ASC
	all.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
	// if filter by name is required
	return name
		? all.filter((d) => {
				return d.name.toLowerCase().search(name.toLowerCase()) >= 0
		  })
		: all
}

// Get data by idRaza
const getByIdRaza = async (idRaza) => {
	try {
		const data = await getAllData()
		const dog = data.find((d) => d.id.toString() === idRaza.toString())
		return dog || {}
	} catch (error) {
		console.error("getByIdRaza: ", error)
		return error
	}
}

// Create new breed
const addNewBreed = async ({
	name,
	heightMin,
	heightMax,
	weightMin,
	weightMax,
	lifeSpan,
	image,
	bredFor,
	temperaments,
}) => {
	try {
		if (!image) {
			const { data } = await axios.get(URL_PHOTO_API)
			image = data.message
		}
		name = name.charAt(0).toUpperCase() + name.slice(1)
		// create new breed
		const newDog = await Dog.create({
			name,
			heightMin,
			heightMax,
			weightMin,
			weightMax,
			lifeSpan,
			bredFor,
			image,
		})
		// add temperaments to newDog
		temperaments.length
			? temperaments.map(async (name) => {
					const temp = await Temperament.findOne({
						attributes: ["id"],
						where: { name: name },
					})
					await newDog.addTemperament(temp.id)
			  })
			: []

		return newDog
	} catch (error) {
		console.error("addNewBreed: ", error)
		return error
	}
}

// Delete from database
const deleteDbBreed = async (id) => {
	try {
		const res = await Dog.destroy({
			where: {
				id,
			},
			force: true,
		})
		return res
	} catch (error) {
		console.error("deleteDbBreed: ", error.message)
		return error
	}
}

module.exports = {
	getApiData,
	getDbData,
	getAllData,
	getByIdRaza,
	addNewBreed,
	deleteDbBreed,
}
