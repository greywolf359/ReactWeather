import React from 'react';
/*
var WeatherMessage = React.createClass({
	render: function(){
		var {location, temp} = this.props;
		return(
			<div>
				<p>It is {temp} in {location}.</p>
			</div>
		);
	}
})
*/
var WeatherMessage = ({temp,location})=>{
	
		return(
			<div>
				<h3 className = "text-center">It is {temp} in {location}.</h3>
			</div>
		)
}

module.exports = WeatherMessage;