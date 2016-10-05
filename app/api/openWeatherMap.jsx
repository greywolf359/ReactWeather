import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=317db732809d619193ec114639e822cc&units=imperial';

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestURL).then(function(res){
			console.log(res);
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);
			console.err("reject function executed");
		});
	}
}





//317db732809d619193ec114639e822cc