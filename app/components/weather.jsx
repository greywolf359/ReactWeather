import React from 'react';
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({

	getInitialState: function(){
		return {
			isLoading: false
		}
	},



	handleSearch: function(location){
		var self = this;

		this.setState({isLoading: true});
		openWeatherMap.getTemp(location).then(function(temp){
			self.setState({location: location, temp: temp, isLoading: false});

		},
			function(errorMessage){
				self.setState({isLoading: false});
				alert(errorMessage);
			}
		)
		console.log(this.state.location, this.state.temp);

		/*
		console.log(loc);
		this.setState({location: loc, temp: 23});
		*/
	},



	render: function(){
		var {isLoading, location, temp} = this.state;
		

		function renderMessage(){
		
			if(isLoading){
				return <h3>Fetching weather...</h3>;
			}else if(temp && location){
				return <WeatherMessage location = {location} temp = {temp}/>;
			}
		}

		return(
			<div> 
			<h3>Weather</h3>
			<WeatherForm onSearch = {this.handleSearch}/>
			{renderMessage()}
			</div>

		);
	}
})

module.exports = Weather;
//317db732809d619193ec114639e822cc