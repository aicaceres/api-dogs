const axios = require('axios')
require('dotenv').config();
const { URL_API } = process.env

const { Dog, Temperament } = require('../db')

const getApiData = async () => {

    const response = await axios.get(URL_API)

    return response.data.map( d => {
            // regex for split and trim
            let [ weightMin, weightMax ] = d.weight.metric.split(/\s*(?:-|$)\s*/)
            let [ heightMin, heightMax ] = d.height.metric.split(/\s*(?:-|$)\s*/)
            let temperament = d.hasOwnProperty('temperament') ? d.temperament.split(/\s*(?:,|$)\s*/) : ''
				result = {
					id: d.id,
                    name: d.name,
                    weightMin: Number(weightMin) ,
                    weightMax: Number(weightMax),
                    heightMin: Number(heightMin),
                    heightMax: Number(heightMax),
                    temperament: temperament,
                    lifeSpan: d.life_span,
                    bredFor: d.bred_for,
                    image: d.image.url
				}
                return result
			})
}

const getDbData = async () => {
    try {

        const dogs = await Dog.findAll({
            include: {
                model: Temperament,
                through: {
                    attributes: [],
                },
        }
        });

        if (dogs.length) {
            // format record like API
            const dbData = dogs.map((d) => {
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
                };
                return data
            });
            return dbData
        } else {
            return []
        }

    } catch (error) {
        return error
    }
}

const getAllData = async () => {

    const api = await getApiData()
    const db = await getDbData()

    return [ ...api, ...db]

}

module.exports = { getApiData, getDbData, getAllData }