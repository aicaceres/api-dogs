const axios = require('axios')
require('dotenv').config();
const { URL_API } = process.env

const { Temperament } = require('../db')

const getTemperamentData = async () => {

    try {
        // get temperaments from DB
		const temperamentsDb = await Temperament.findAll();

        if (temperamentsDb.length) {
            return temperamentsDb;

		} else {
			// get temperaments from DOG API
			const response = await axios.get(URL_API);

			var temperaments = [];
			response.data.map((d) => {
				let temperament = d.hasOwnProperty("temperament")
					? d.temperament.split(/\s*(?:,|$)\s*/)
					: [];
				temperaments = [...temperaments, ...temperament];
			});

			const tempSet = new Set([...temperaments]);

			const sorted = [...tempSet].sort();

			const bulk = sorted.map((t, i) => {
				return { name: t };
			});

			const temperamentsInserted = await Temperament.bulkCreate(bulk);
			return temperamentsInserted;
		}
	} catch (error) {
		return error;
	}
};

module.exports = { getTemperamentData }