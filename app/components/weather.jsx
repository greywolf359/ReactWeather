import React from 'react';
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({

	getInitialState: function(){
		return {
			isLoading: false
		}
	},

	handleSearch: function(location){
		var self = this;

		this.setState({
				location: undefined, 
				temp: undefined, 
				isLoading: true, 
				errorMessage: undefined
			});	

	
		openWeatherMap.getTemp(location).then(function(temp){
			self.setState({
				location: location, 
				temp: temp, 
				isLoading: false, 
			});

		},
			function(e){
				self.setState({
					isLoading: false, 
					errorMessage: `Returned error message: ${e.message}`
				});
				console.log(e.message);
				console.error("reject function executed");
			}
		)
		console.log(this.state.location, this.state.temp);

		/*
		console.log(loc);
		this.setState({location: loc, temp: 23});
		*/
	},

	componentDidMount: function(){
		var location = this.props.location.query.location;

		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},

	componentWillReceiveProps: function(newProps){
		var location = newProps.location.query.location;
		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},

	render: function(){
		var {isLoading, location, temp, errorMessage} = this.state;
		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching weather...</h3>;
			}else if(temp && location){
				return <WeatherMessage location = {location} temp = {temp}/>;
			}
		}

		function renderError(){
			if(typeof errorMessage === "string"){
				return(
					<ErrorModal message = {errorMessage}/>
				)

			}
		}

		return(
			<div> 
			<h1 className = "text-center page-title">Get Weather</h1>
			<WeatherForm onSearch = {this.handleSearch}/>
			{renderMessage()}
			{renderError()}
			</div>

		);
	}
})

module.exports = Weather;
//317db732809d619193ec114639e822cc