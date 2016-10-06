import React from 'react';
/*
var About = React.createClass({
	render: function(){
		return(<h3>About</h3>);
	}
})
*/
var About = function(){
	return(<div>
		<h1 className = "text-center page-title">About</h1>
		<p>Components used in making this app:</p>
		<ul>
			<li>Open Weather Map</li>
			<li>Foundation</li>
			<li>Reactjs</li>
		</ul>
		</div>
	);
}

module.exports = About;