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
				<p>It is {temp} in {location}.</p>
			</div>
		)
}

module.exports = WeatherMessage;