import React, {Component} from 'react';
import ReactDOM from "react-dom";


console.log("are you reading this");
/*
class myComp extends Component{
	constructor(props){
		super(props);
	}

	render(){
		console.log("execute");
		return (
			<div>
			<h2>this is a subheader</h2>
			</div>
		)
	}

}

*/

var Xomp = React.createClass({
	getDefaultProps: function(){
		return {someProp: "blue"}
	},

	getInitialState: function(){
		return {someState: this.props.someProp}
	},

	propTypes: {
		someProp: React.PropTypes.string
	},

	render: function(){
		return(
			<div>
			<h3>{this.props.someProp}</h3>
			<h4>{this.state.someState}</h4>
			</div>
			);
	}
})

export default Xomp
