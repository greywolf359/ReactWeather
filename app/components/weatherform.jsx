import React from 'react';

var WeatherForm = React.createClass({

	onFormSubmit: function(e){
		e.preventDefault();

		var location = this.refs.location.value;
		

		if(location.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},

	render: function(){
		return(
			<div>
			<h3>Weather form</h3>
			<form onSubmit = {this.onFormSubmit}>
				<input type = "text" ref = "location"/>
				<button className = "button expanded hollow">Search</button>
			</form>
			</div>
		);
	}
})

module.exports = WeatherForm;