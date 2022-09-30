const axios = require("axios")
require("dotenv").config()
const { URL_API } = process.env

const { Dog, Temperament } = require("../db")

// Get data from the API
const getApiData = async () => {
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
		return error
	}
}

// Join all the data
const getAllData = async (name) => {
	const api = await getApiData()
	const db = await getDbData()

	const all = [...api, ...db]

	return name
		? all.filter((d) => {
				return d.name.toLowerCase().search(name.toLowerCase()) >= 0
		  })
		: all
}

// Get data by idRaza
const getByIdRaza = async (idRaza) => {
	const data = await getAllData()
	const dog = data.find((d) => d.id.toString() === idRaza.toString())
	return dog || {}
}

// Create new breed
const addNewBreed = async ({
	name,
	heightMin,
	heightMax,
	weightMin,
	weightMax,
	lifeSpan,
	bredFor,
}) => {
	const { data } = await axios.get("https://dog.ceo/api/breeds/image/random")

	const dog = await Dog.create({
		name,
		heightMin,
		heightMax,
		weightMin,
		weightMax,
		lifeSpan,
		bredFor,
		image: data.message,
	})
	// add temperaments

	return dog
}

module.exports = { getApiData, getDbData, getAllData, getByIdRaza, addNewBreed }
