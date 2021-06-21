const rp = require('request-promise');

module.exports = async function (city = '') {
	try {
		if (!city) {
			throw new Error('Введите имя города')
		}
		const KEY = 'f5744fa95be65ff2128fcd1cbe022f1d'
		const uri = 'http://api.openweathermap.org/data/2.5/weather/'
		const options = {
			uri,
			qs: {
				appid: KEY,
				q: city,
				units: 'imperial',
			},
			json: true,
		}
		const data = await rp(options)
		const celsius = (data.main.temp - 32) * 5 / 9

		return {
			weather: `${data.name}: ${celsius.toFixed(1)}`,
			error: null
		}
	} catch (error) {
		return {
			weather: null,
			error: error.message,
		}
	}

}