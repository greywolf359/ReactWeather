import React, {Component} from 'react';
var Nav = require('Nav');

/*
var Main = React.createClass({
	render: function(){
		return (<div>
			<Nav/>
			<h1>main</h1>
			{this.props.children}

			</div>);
	}
	})
*/


var Main = (props)=>{
	return (<div>
			<Nav/>
			<div className = "row">
				<div className = "medium-6 large-6 columns small-centered">
			{props.children}
			</div>
			</div>
			</div>);
}

module.exports = Main;
//export default Main;