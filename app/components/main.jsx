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
			<h1>main</h1>
			{props.children}

			</div>);
}

module.exports = Main;
//export default Main;